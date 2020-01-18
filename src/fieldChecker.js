import ruleChecker from "./ruleChecker";

const fieldChecker = (elem, prop, rules, name = prop) => {
	Object.entries(rules).forEach(([rule, value]) => {
		ruleChecker[rule](value, elem, prop, name)
	})
};

export default fieldChecker;