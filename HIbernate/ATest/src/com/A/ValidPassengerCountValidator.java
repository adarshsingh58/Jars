package com.A;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ValidPassengerCountValidator implements
		ConstraintValidator<ValidAnno, A> {

	@Override
	public void initialize(ValidAnno arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean isValid(A arg0, ConstraintValidatorContext arg1) {
		// TODO Auto-generated method stub
		if (arg0.getFirstName()==null)
		{
			System.out.println("In isValid() false");
			return false;
		}
		else
			return true;
	}

}
