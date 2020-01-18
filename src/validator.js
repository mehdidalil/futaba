import ruleChecker from "./ruleChecker";
import fieldChecker from "./fieldChecker";

const validator = (scheme, elem) => {
	Object.entries(scheme).forEach(([prop, rules]) => {
		fieldChecker(elem, prop, rules);
	})
}

export default validator;