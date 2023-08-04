# this is for custom `Command Prompt` format displayed in linux terminal.
# add the following line to the end of .bashrc file
# don't forget to copy the prompt.sh file to your home directory

function prompt_command {
  PS1=$(~/prompt.sh)
}

PROMPT_DIRTRIM=3
PROMPT_COMMAND=prompt_command
