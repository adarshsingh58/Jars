package com.A.a;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class RealValidator implements ConstraintValidator<CheckThisClass, A>{

	@Override
	public void initialize(CheckThisClass arg0) {
		// TODO Auto-generated method stub
		System.out.println("ini");
	}

	@Override
	public boolean isValid(A arg0, ConstraintValidatorContext arg1) {
		// TODO Auto-generated method stub
		System.out.println("in isValid)(");
		if(arg0.getFirstName()==null)
		{
			System.out.println("flase");
		return false;
		}
		else
			return true;
	}

	
}
