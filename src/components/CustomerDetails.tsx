import * as React from "react";
import CustomerForm from "./CustomerForm";
import { createServer } from "miragejs";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface ICustomerDetails {
	customerName: string;
	dateOfBirth: Date;
	emailAddress: string;
	address: string;
	telephoneNumber: string;
	altTelephoneNumber: string;
}

createServer({
	routes() {
		this.get("/api/customer/1", () => {
			return {
				customerName: "Mr Fraser Lomas",
				dateOfBirth: new Date("April 1, 1985"),
				emailAddress: "asd@example.com",
				address: "23 56 jhjhhj ghgjhgjhg",
				telephoneNumber: "68768787",
				altTelephoneNumber: "6545365465465",
			};
		});
	},
});
const CustomerDetails: React.FC = () => {
	const [loading, setLoading] = React.useState<boolean>(true);
	const [customerDetails, setCustomerDetails] =
		React.useState<ICustomerDetails>({
			customerName: "",
			dateOfBirth: new Date(),
			emailAddress: "",
			address: "",
			telephoneNumber: "",
			altTelephoneNumber: "",
		});

	React.useEffect(() => {
		fetch("/api/customer/1")
			.then((response) => response.json())
			.then((json) => setCustomerDetails(json))
			.then(() => setLoading(false));
	}, []);
	if (loading)
		return (
			<Box sx={{ display: "flex" }}>
				<CircularProgress />
			</Box>
		);
	return <CustomerForm customerDetails={customerDetails} />;
};

export default CustomerDetails;
