#!/usr/bin/env bash

brew install go

export GOPATH=$HOME/Go
# export GOROOT=/usr/local/opt/go/libexec
export PATH=$PATH:$GOPATH/bin
export PATH=$PATH:$GOROOT/bin

go install github.com/googlecodelabs/tools/claat@latest