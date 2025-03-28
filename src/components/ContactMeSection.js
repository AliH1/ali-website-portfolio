import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {submit("", values)},
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required")
    }),
  });

  useEffect(() => {
    if(response){
      onOpen(response.type, response.message);
      if(response.type === 'success'){
        formik.resetForm()
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      h="100px"
    >
      <VStack w="1024px" p={32} spacing={8}alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Text fontSize="xl" color="white">
          Email: ahassan0213@gmail.com
        </Text>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
