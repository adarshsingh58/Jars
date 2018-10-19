package com.journaldev.validator.hibernate.main;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.lang.reflect.Method;
import java.util.Set;

import javax.validation.Configuration;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import javax.validation.executable.ExecutableValidator;

import org.hibernate.validator.HibernateValidator;

import com.journaldev.validator.hibernate.model.EmployeeXMLValidation;

public class ValidatorTest {

	public static void main(String[] args) throws FileNotFoundException,
			NoSuchMethodException, SecurityException {
		Configuration<?> config = Validation.byDefaultProvider().configure();
		config.addMapping(new FileInputStream("employeeXMLValidation.xml"));
		ValidatorFactory validatorFactory1 = config.buildValidatorFactory();
		Validator validator1 = validatorFactory1.getValidator();

		EmployeeXMLValidation emp1 = new EmployeeXMLValidation(10, "Name",
				"email", "123");

		Set<ConstraintViolation<EmployeeXMLValidation>> validationErrors1 = validator1
				.validate(emp1);

		if (!validationErrors1.isEmpty()) {
			for (ConstraintViolation<EmployeeXMLValidation> error : validationErrors1) {
				System.out.println(error.getMessage());

			}
		}

	}

}
