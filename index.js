import * as a from '@jwalsh/mod-a'
import * as b from '@jwalsh/mod-b'
import * as c from '@jwalsh/mod-c'
import * as d from '@jwalsh/mod-d'

console.log('Test harness for module dependency changes between NPM 3 and NPM 5')

console.log(a._(1))
console.log(b._(2))
console.log(c._(3))
console.log(d._(4))
