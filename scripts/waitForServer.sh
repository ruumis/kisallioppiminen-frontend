#!/bin/bash

echo "Waiting for frontend to launch on 3000..."

until $(curl --output /dev/null --silent --head --fail http://web:3000); do
  printf '.'
  sleep 5
done

echo "Frontend launched!"