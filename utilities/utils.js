import { curry, union, compose } from 'ramda'

let idCounter = 0;
export const uniqueId = prefix => {
  const id = ++idCounter + ''
  return prefix ? prefix + id : id
};

export const mergeClassNames = curry((defaults, className) => {
	return union(defaults.split(' '), className.split(' ')).join(' ')
})

export const prefixClassNames = curry((key, className) => {

	return className.split(' ')
		.map(name => name[0] === '-' ? key + name : name)
		.join(' ')
})

export const classify = curry((key, defaults, className = '') => {
	return compose(
		mergeClassNames(defaults),
		prefixClassNames(key)
	)(className)
})