#!/usr/bin/env bash

function info() {
  set -eo pipefail

  local environment="${1:-staging}"
  local tag="${2:-}"
  local name=''
  local bucket=extensions.bradsdeals.com
  local bucket_path=''
  local public_url=''

  # Default the tag to ref name
  [ -n "$tag" ] || tag="$REF_NAME"

  # Name can be found from the repository
  name="${REPOSITORY#*/contentstack-extension-}"

  # Bucket should change if environment is not production
  [ "$environment" = production ] || bucket="extensions-$environment.bradsdeals.com"

  # Bucket path uses name and tag
  bucket_path="contentstack/$name/$tag"

  # Public URL will be bucket and bucket path
  public_url="https://$bucket/$bucket_path"

  # Set outputs
  echo "::set-output name=environment::$environment"
  echo "::set-output name=name::$name"
  echo "::set-output name=tag::$tag"
  echo "::set-output name=bucket::$bucket"
  echo "::set-output name=bucket-path::$bucket_path"
  echo "::set-output name=public-url::$public_url"
}

if [ "${BASH_SOURCE[0]}" = "$0" ]; then
  set -u

  info "${@:-}"
  exit $?
fi
