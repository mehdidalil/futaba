import validator from "./validator";
import fieldChecker from "./fieldChecker";
import { genericValue } from "./helper";

const ruleChecker = {
	required: (rule, elem, prop, name) => {
		if (!(prop in elem) || elem[prop] === undefined) {
			if (rule) {
				throw new Error(`${name} is missing !`);
			} else {
				return ;
			}
		}
	},
	type: (rule, elem, prop, name) => {
		if (rule && (typeof rule === "string" ? typeof elem[prop] !== rule : !(elem[prop] instanceof rule)))
			throw new Error(`${name} is not ${rule} !`);
	},
	value: (rule, elem, prop, name) => {
		if (rule) {
			genericValue(rule, elem[prop], prop, name);
		}
	},
	length: (rule, elem, prop, name) => {
		if (rule) {
			genericValue(rule, elem[prop].length, prop, name, "character(s) long");
		}
	},
	match: (rule, elem, prop, name) => {
		if (rule) {
			if (!((rule instanceof RegExp 
					? rule
					: new RegExp(rule))
					.test(elem[prop]))) {
				throw new Error(`${name} not valid !`);
			}
		}
	},
	items: (rule, elem, prop, name) => {
		if (rule) {
			elem[prop].forEach((d, i) => {
				fieldChecker(elem[prop], i, rule, `${prop}[${i}]`);
			});
		}
	}
}

export default ruleChecker;