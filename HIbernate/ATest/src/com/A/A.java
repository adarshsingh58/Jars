package com.A;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@ValidAnno
public class A {

	@NotNull(message="nnnoootttnul")
	@Size(min=2,max=5,message="canttttexceed")
	private String FirstName;
	
	private String LastName;

	public String getFirstName() {
		return FirstName;
	}

	public void setFirstName(String firstName) {
		FirstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	
}
