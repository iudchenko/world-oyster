import styles from "./Login.module.css";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../services/supabase";

import { useAuth } from "../contexts/AuthContext";

import PageNav from "../components/PageNav";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/app");
      }
    },
    [isAuthenticated, navigate]
  );

  if (!isAuthenticated) {
    return (
      <main className={styles.login}>
        <PageNav />
        <div className={styles.formContainer}>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              style: {
                button: {
                  background: "#818cf8",
                  color: "white",
                  border: "none",
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                },
                anchor: { color: "white", fontFamily: "Inter" },
              },
            }}
            providers={[]}
          />
        </div>
      </main>
    );
  }
}
