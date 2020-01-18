const USER_REGEX_NAME = /^(?=.{3,32}$)[a-zA-Z]+(?:['_.\-\s][a-zA-Z]+)*$/;

const rules = {
	age: {
		required: "false",
		type: "number",
		value: {
			min: 10,
			max: 40
		}
		//match: USER_REGEX_NAME
	}
	
}

export default rules;