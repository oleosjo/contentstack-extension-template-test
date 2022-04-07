#!/usr/bin/env bats

load info.sh

function setup() {
  export REPOSITORY=shopsmart/contentstack-extension-example
  export REF_NAME=v1.0.0-alpha.6
}

function teardown() {
  :
}

@test "it should use the tag provided" {
  run info "" v1.0.0-alpha.1

  [ "$status" -eq 0 ]
  [[ "$output" =~ .*"::set-output name=tag::v1.0.0-alpha.1".* ]]
}

@test "it should use the tag from the github ref name" {
  run info

  [ "$status" -eq 0 ]
  [[ "$output" =~ .*"::set-output name=tag::v1.0.0-alpha.6".* ]]
}

@test "it should use the github repo minus the prefix as the name" {
  run info

  [ "$status" -eq 0 ]
  [[ "$output" =~ .*"::set-output name=name::example".* ]]
}

@test "it should use the production s3 bucket" {
  run info production

  [ "$status" -eq 0 ]
  [[ "$output" =~ .*"::set-output name=bucket::extensions.bradsdeals.com".* ]]
}

@test "it should use the staging s3 bucket" {
  run info

  [ "$status" -eq 0 ]
  [[ "$output" =~ .*"::set-output name=bucket::extensions-staging.bradsdeals.com".* ]]
}

@test "it should use the name and tag within the s3 bucket path" {
  run info

  [ "$status" -eq 0 ]
  [[ "$output" =~ .*"::set-output name=bucket-path::contentstack/example/v1.0.0-alpha.6".* ]]
}

@test "it should use the name and tag within the public url" {
  run info

  [ "$status" -eq 0 ]
  [[ "$output" =~ .*"::set-output name=public-url::https://extensions-staging.bradsdeals.com/contentstack/example/v1.0.0-alpha.6".* ]]
}
