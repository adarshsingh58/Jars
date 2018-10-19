package com.A.a;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

public class B {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		ValidatorFactory vf=Validation.buildDefaultValidatorFactory();
		Validator val=vf.getValidator();
		A obj=new A();
//		obj.setFirstName("Adarsh");
		Set<ConstraintViolation<A>> set=val.validate(obj);
		if(set.size()>0)
			System.out.println(set.iterator().next().getMessage());
		else
			System.out.println("Allcool");
		
	}

}
