#!/bin/bash

export PGPASSWORD='node_password'

echo "Configuring database 'dragonstackdb'..."

dropdb -U node_user dragonstackdb
createdb -U node_user dragonstackdb

psql -U node_user dragonstackdb < ./bin/sql/generation.sql
psql -U node_user dragonstackdb < ./bin/sql/dragon.sql

echo "Database 'dragonstackdb' configured successfully."
