import validator from 'validator';
import isEmpty from './is-empty';


const validateAndSanitizeCheckoutForm = ( data, hasStates = true ) => {
	
	let errors = {};
	let sanitizedData = {};
	
	
	data.firstName = ( ! isEmpty( data.firstName ) ) ? data.firstName : '';
	data.lastName = ( ! isEmpty( data.lastName ) ) ? data.lastName : '';
	
	data.country = ( ! isEmpty( data.country ) ) ? data.country : '';
	
	data.city = ( ! isEmpty( data.city ) ) ? data.city : '';
	data.state = ( ! isEmpty( data.state ) ) ? data.state : '';
	
	data.phone = ( ! isEmpty( data.phone ) ) ? data.phone : '';
	
	data.orderNotes = ( ! isEmpty( data.orderNotes ) ) ? data.orderNotes : '';
	
	 
	const addErrorAndSanitizedData = ( fieldName, errorContent, min, max, type = '', required ) => {
		

		if ( ! validator.isLength( data[ fieldName ], { min, max } ) ){
			errors[ fieldName ] = `${errorContent} must be ${min} to ${max} characters`;
		}
		
		if ( 'email' === type && ! validator.isEmail( data[ fieldName ] ) ){
			errors[ fieldName ] = `${errorContent} is not valid`;
		}
		
		if ( 'phone' === type && ! validator.isMobilePhone( data[ fieldName ] ) ) {
			errors[ fieldName ] = `${errorContent} is not valid`;
		}
		
		if ( required && validator.isEmpty( data[ fieldName ] ) ) {
			errors[ fieldName ] = `${errorContent} is required`;
		}
		
		// If no errors
		if ( ! errors[ fieldName ] ) {
			sanitizedData[ fieldName ] = validator.trim( data[ fieldName ] );
			sanitizedData[ fieldName ] = ( 'email' === type ) ? validator.normalizeEmail( sanitizedData[ fieldName ] ) : sanitizedData[ fieldName ];
			sanitizedData[ fieldName ] = validator.escape( sanitizedData[ fieldName ] );
		}
		
	};
	
	addErrorAndSanitizedData( 'firstName', 'First name', 2, 35, 'string', true );
	addErrorAndSanitizedData( 'lastName', 'Last name', 2, 35, 'string', true );
	
	
	
	addErrorAndSanitizedData( 'city', 'City field', 3, 25, 'string', true );
	addErrorAndSanitizedData( 'state', 'State/County', 0, 254, 'string', hasStates );
	
	addErrorAndSanitizedData( 'phone', 'Phone number', 10, 15, 'phone', true );
	
	
	// The data.createAccount is a boolean value.
	sanitizedData.createAccount = data.createAccount;
	addErrorAndSanitizedData( 'orderNotes', '', 0, 254, 'string', false );
	

	return {
		sanitizedData,
		errors,
		isValid: isEmpty( errors )
	}
};

export default validateAndSanitizeCheckoutForm;