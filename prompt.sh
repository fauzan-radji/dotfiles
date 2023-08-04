GREEN="\[\033[0;32m\]"
CYAN="\[\033[0;36m\]"
RED="\[\033[0;31m\]"
PURPLE="\[\033[0;35m\]"
BROWN="\[\033[0;33m\]"
LIGHT_GRAY="\[\033[0;37m\]"
LIGHT_BLUE="\[\033[1;34m\]"
LIGHT_GREEN="\[\033[1;32m\]"
LIGHT_CYAN="\[\033[1;36m\]"
LIGHT_RED="\[\033[1;31m\]"
LIGHT_PURPLE="\[\033[1;35m\]"
YELLOW="\[\033[1;33m\]"
WHITE="\[\033[1;37m\]"
RESTORE="\[\033[0m\]"

git status &>/dev/null;
if [ $? -eq 0 ]; then
  BRANCH=$(git branch --show-current)
else
  BRANCH="Not a git repository"
fi

echo "\n${LIGHT_BLUE}┌──(${LIGHT_RED}\u💀${LIGHT_GREEN}\H${LIGHT_BLUE})-[${YELLOW}\w${LIGHT_BLUE}] ${LIGHT_CYAN}(${BRANCH})\n${LIGHT_BLUE}└─${LIGHT_CYAN}\$ ${RESTORE}"