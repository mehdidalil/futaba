const genericValue = (rule, value, prop, name, endMessage = "") => {
	if (rule.min && value < rule.min)
		throw new Error(`${name} should be over ${rule.min} ${endMessage}!`);
	if (rule.max && value > rule.max)
		throw new Error(`${name} should be under ${rule.max} ${endMessage}!`);
	if (rule.equals && !rule.equals.includes(value))
		throw new Error(`${name} should be equal to ${rule.equals} ${endMessage}!`);
	if (rule.not && rule.not.includes(value))
		throw new Error(`${name} should not be ${rule.not} ${endMessage}!`);
};

export default genericValue;