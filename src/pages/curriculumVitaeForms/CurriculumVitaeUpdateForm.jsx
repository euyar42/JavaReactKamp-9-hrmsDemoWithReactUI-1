import React from "react";
import { useFormik } from "formik";
import CurriculumVitaeForm from "./components/CurriculumVitaeForm";
import curriculumVitaeValidationSchema from "./components/curriculumVitaeValidationSchema";
import CurriculumVitaeService from "./../../services/curriculumVitaeService";
import customOnSubmitUpdate from "../../utilities/customOnSubmitUpdate";

export default function CurriculumVitaeUpdateForm({ currentCurriculumVitae }) {
  const currentInitialValues = {
    id: currentCurriculumVitae.id,
    description: currentCurriculumVitae.description,
    githubLink: currentCurriculumVitae.githubLink,
    linkedinLink: currentCurriculumVitae.linkedinLink,
    photoLink: currentCurriculumVitae.photoLink,
    jobSeeker: { id: currentCurriculumVitae.jobSeeker.id },
  };
  let data="";
  let handleUploadPhoto = (file) => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .uploadPhoto(file, currentCurriculumVitae.id)
      .then((response) => data=response.data.data)
      .catch((reason) => console.log(reason));
      console.log(data)
  };

  const formik = useFormik({
    initialValues: currentInitialValues,
    validationSchema: curriculumVitaeValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      customOnSubmitUpdate(
        new CurriculumVitaeService(),
        values,
        "Curriculum vitae updated successfully."
      );
      console.log(values.photoLink);
      handleUploadPhoto(values.photoLink);
    },
  });

  return (
    <CurriculumVitaeForm
      headerIconName="paperclip"
      headerContent="Update Curriculum Vitae"
      SubmitButtonIconName="save"
      SubmitButtonText="Update"
      formik={formik}
      currentCurriculumVitaeId={currentCurriculumVitae.id}
    />
  );
}
