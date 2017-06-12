import * as a from '../mod-a/'
import * as b from '../mod-b/'
import * as c from '../mod-c/'
import * as d from '../mod-d/'

console.log('Test harness for module dependency changes between NPM 3 and NPM 5')

console.log(a, a._(1))
console.log(b, b._(2))
console.log(c, c._(3))
console.log(d, d._(4))
