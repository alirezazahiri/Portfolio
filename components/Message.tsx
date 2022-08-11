import { CREATE_MESSAGE } from "@/gql/mutations";
import { useMutation } from "@apollo/client";
import { TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { CHARACTER_LIMIT, EMAIL_REGEX } from "@/constants/common.constants";
import withMotion from "@/HOC/MotionHOC";

const Message = () => {
  const [formData, setFormData] = useState({
    name: { content: "", error: false },
    email: { content: null, error: false },
    text: { content: "", error: false },
  });

  const [createMessage, { loading, error, called }] = useMutation(
    CREATE_MESSAGE,
    {
      variables: {
        name: formData.name.content,
        email: formData.email.content,
        text: formData.text.content,
      },
    }
  );

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") {
      setFormData((prev: any) => ({
        ...prev,
        email: {
          ...prev.email,
          error: !EMAIL_REGEX.test(value),
        },
      }));
    }
    setFormData((prev: any) => ({
      ...prev,
      [name]: { ...prev[name], content: value },
    }));
  };
  const clickHandler = () => {
    const { name, text, email } = formData;
    if (name.content && text.content) {
      if (email.content && !EMAIL_REGEX.test(email.content)) {
        setFormData((prev) => ({
          ...prev,
          email: { ...prev.email, error: true },
          name: { ...prev.name, error: false },
          text: { ...prev.text, error: false },
        }));
        toast.error("email format is not valid!", {
          position: "top-center",
        });
      } else {
        createMessage();
        setFormData((prev) => ({
          ...prev,
          email: { ...prev.email, error: false },
          name: { ...prev.name, error: false },
          text: { ...prev.text, error: false },
        }));
      }
    } else {
      toast.warn("please fill in all required fields!", {
        position: "top-center",
      });
      setFormData((prev) => ({
        ...prev,
        name: { ...prev.name, error: true },
        text: { ...prev.text, error: true },
      }));
    }
  };

  useEffect(() => {
    if (called && !loading && !error) {
      toast.success("Message has been sent successfully!", {
        position: "top-center",
      });
    } else if (called && error) {
      toast.error("Failed to send your message!", {
        position: "top-center",
      });
    }
  }, [error, loading, called]);

  return (
    <Container>
      <TextField
        variant="outlined"
        label="name"
        name="name"
        margin="dense"
        sx={{ width: "100%" }}
        value={formData.name.content}
        onChange={changeHandler}
        error={formData.name.error}
        required
      />
      <TextField
        variant="outlined"
        label="e-mail"
        name="email"
        margin="dense"
        sx={{ width: "100%" }}
        value={formData.email.content || ""}
        error={formData.email.error}
        onChange={changeHandler}
        type="email"
        helperText="if you are choosing to mention your email, please enter a valid one, so we can keep in touch. e.g. itsalireza.zr@gmail.com"
      />
      <TextField
        variant="outlined"
        label="text"
        name="text"
        margin="dense"
        sx={{ width: "100%" }}
        value={formData.text.content}
        onChange={changeHandler}
        error={formData.text.error}
        inputProps={{
          maxLength: CHARACTER_LIMIT,
        }}
        helperText={`${formData.text.content.length}/${CHARACTER_LIMIT}`}
        multiline
        minRows={4}
        required
      />
      <LoadingButton
        size="medium"
        onClick={clickHandler}
        endIcon={<SendRoundedIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        sx={{ mt: 1 }}
        color="primary"
      >
        Send
      </LoadingButton>
      <ToastContainer theme="colored" />
    </Container>
  );
};

const Container = styled.div`
  padding: 10% 40px 40px 80px;
`;

export default withMotion(Message);
