import rules from './test';
import ruleChecker from './ruleChecker';
import validator from './validator';

const user = {
	age: 50
};

validator(rules, user);