# this is for custom `Command Prompt` format displayed in linux terminal.
# `PS1` stands for `Prompt String 1`
# You could find it somewhere in line 66 in your .bashrc file.

case "$TERM" in
xterm*|rxvt*)
    PS1="\n\[\e[1;36m\]┌──(\[\e[1;31m\]\u💀\[\e[32m\]\H\[\e[36m\])-[\[\e[33m\]\w\[\e[36m\]]\n└─\[\e[34m\]\$ \[\e[0m\]"
    ;;
*)
    ;;
esac
