#!/bin/bash

function doesExist() {
	if ! command -v $1 > /dev/null; then
		if [[ $1 == 'forge' || $1 == 'cast' ]]; then
			printf "\e[31;1m Foundry is not installed.\n Install it by running \'curl -L https://foundry.paradigm.xyz | bash\'\n\n\e[0m"
		else
			printf "\e[31;1m $1 is not installed. Please install it before continuing.\n\n\e[0m"
		fi
			exit 1
	fi
}

doesExist curl
doesExist git
doesExist forge
doesExist cast
doesExist node
doesExist pnpm

printf "\e[32m All the necessary tools are installed.\n\n\e[0m "

mkdir -p chain-end
cd chain-end
forge init . --no-commit
cd ../front-end
pnpm install

printf "\n\e[32m pnpm start to start the react server.\n Run the helper functions from the 'front-end' directory.\n For a list of the helper functions, check out the GitHub repository.\n\n\e[0m"

