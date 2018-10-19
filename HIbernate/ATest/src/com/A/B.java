package com.A;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Set;

import javax.validation.Configuration;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;



public class B {

	public static void main(String[] args) {
		
		Configuration<?> config=Validation.byDefaultProvider().configure();
		try {
			config.addMapping(new FileInputStream("AValidation.xml"));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		ValidatorFactory vf=config.buildValidatorFactory();
		Validator val=vf.getValidator();
		A obj=new A();
		obj.setLastName("adarsh");
//		obj.setFirstName("Adarsh");
		
		Set<ConstraintViolation<A>> set=val.validate(obj);
		if(set.size()>0)
			System.out.println("error "+set.iterator().next().getMessage());
		else
			System.out.println("Cool");
	}
}
