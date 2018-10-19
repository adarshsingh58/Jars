package com.A.a;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target({ElementType.TYPE,ElementType.ANNOTATION_TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = { RealValidator.class })
@Documented
public @interface CheckThisClass {

	 String message() default "{com.A" +
	            "CheckThisClass.message}";

	    Class<?>[] groups() default { };

	    Class<? extends Payload>[] payload() default { };
}
