all: unix-crypt-td.min.js

unix-crypt-td.min.js: src/unix-crypt-td.js
	closure --js src/js-unix-crypt.js --compilation_level ADVANCED_OPTIMIZATIONS > js-unix-crypt.min.js
