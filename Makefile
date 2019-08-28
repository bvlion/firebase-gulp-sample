# Set up
localsetup:
	# glupをグローバルインストール
	npm install -g gulp
.PHONY: localsetup

# install
install:
	npm install
	cd functions && npm install
.PHONY: install

# start
start:
	gulp firebase
.PHONY: start