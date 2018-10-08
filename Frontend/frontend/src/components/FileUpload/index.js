import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Fileupload.css'
const FileUploadComponent = ({ name, customStyle, 	...restProps }) => {
	return (
		<Form >
			<FormGroup >
				<div style={{ ...customStyle, width: 'auto' }}>
					<Input
						type="file"
						name={name}
						id={name}
						className="custom-file-upload"
						style={{ backgroundColor: 'transparent' }}
						{...restProps}
					/>
				</div>
				{displayhelpText(restProps.message)}
			</FormGroup>
		</Form>
	);
};

const displayhelpText = (message) => {
	return (
		<p className="file-upload-help-text">{message}</p>
	)
}
export default FileUploadComponent;
