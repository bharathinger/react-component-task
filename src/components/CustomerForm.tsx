import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

interface Values {
	customerName: string;
	dateOfBirth: Date;
	emailAddress: string;
	address: string;
	telephoneNumber: string;
	altTelephoneNumber: string;
}

const TextArea = ({ field, form, ...props }) => {
	return <TextField multiline rows={5} {...field} {...props} />;
};
const DateField = ({ field, form, ...props }) => {
	return <TextField type="date" {...field} {...props} />;
};
const CustomerForm: React.FC<{ customerDetails: Values }> = ({
	customerDetails,
}) => {
	const {
		customerName,
		dateOfBirth,
		emailAddress,
		address,
		telephoneNumber,
		altTelephoneNumber,
	} = customerDetails;
	return (
		<Grid container>
			<Grid item sm={3} xs={false}></Grid>
			<Grid item sm={6} xs={12}>
				<Paper>
					<Box m={5} p={3}>
						<Typography align="left" variant="h5">
							Customer Details
						</Typography>
						<Divider sx={{ mb: "1rem" }} />
						<Formik
							initialValues={{
								customerName: customerName,
								dateOfBirth: dateOfBirth,
								emailAddress: emailAddress,
								address: address,
								telephoneNumber: telephoneNumber,
								altTelephoneNumber: altTelephoneNumber,
							}}
							onSubmit={(
								values: Values,
								{ setSubmitting }: FormikHelpers<Values>
							) => {
								setTimeout(() => {
									alert(JSON.stringify(values, null, 2));
									setSubmitting(false);
								}, 100);
							}}
						>
							<Form>
								<InputLabel sx={{ mb: "0.25rem" }} htmlFor="customerName">
									Customer Name
								</InputLabel>
								<Field
									id="customerName"
									name="customerName"
									placeholder="John"
									as={TextField}
									fullWidth
									variant="outlined"
									margin="dense"
								/>
								<InputLabel margin="dense" htmlFor="emailAddress">
									Email Address
								</InputLabel>
								<Field
									id="emailAddress"
									name="emailAddress"
									placeholder="john@acme.com"
									as={TextField}
									type={"email"}
									fullWidth
									variant="outlined"
									margin="dense"
								/>
								<InputLabel margin="dense" htmlFor="dateOfBirth">
									Date of Birth
								</InputLabel>
								<Field
									id="dateOfBirth"
									name="dateOfBirth"
									placeholder="01/01/1981"
									fullWidth
									variant="outlined"
									margin="dense"
									component={DateField}
								/>
								<InputLabel margin="dense" htmlFor="address">
									Address
								</InputLabel>
								<Field
									id="address"
									name="address"
									placeholder="address goes here"
									fullWidth
									variant="outlined"
									margin="dense"
									component={TextArea}
								/>
								<InputLabel margin="dense" htmlFor="telephoneNumber">
									Telephone Number
								</InputLabel>
								<Field
									as={TextField}
									id="telephoneNumber"
									name="telephoneNumber"
									placeholder="1004567890"
									type="tel"
									fullWidth
									variant="outlined"
									margin="dense"
								/>

								<InputLabel margin="dense" htmlFor="altTelephoneNumber">
									Alt Telephone Number
								</InputLabel>
								<Field
									as={TextField}
									id="altTelephoneNumber"
									name="altTelephoneNumber"
									placeholder="1004567890"
									type="tel"
									fullWidth
									variant="outlined"
									margin="dense"
								/>
								<Box
									m={1}
									display="flex"
									justifyContent="flex-end"
									alignItems="flex-end"
								>
									<Button size="medium" variant="outlined" type="submit">
										Edit
									</Button>
								</Box>
							</Form>
						</Formik>
					</Box>
				</Paper>
			</Grid>
		</Grid>
	);
};
export default CustomerForm;
