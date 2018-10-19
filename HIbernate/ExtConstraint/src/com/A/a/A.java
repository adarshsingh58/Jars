package com.A.a;

import javax.validation.constraints.NotNull;

@CheckThisClass
public class A {
	
//	@NotNull(message="Cant be null")
	private String FirstName;

	public String getFirstName() {
		return FirstName;
	}

	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	
	
}
