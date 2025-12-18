import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function PayFees() {
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <h1 style={styles.heading}>Pay Gym Fees</h1>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              maxLength={10}
              style={styles.input}
            />

            <button type="submit" style={styles.button}>
              Continue
            </button>
          </form>
        ) : (
          <div style={styles.confirmBox}>
            <p><strong>Mobile:</strong> {mobile}</p>
            <p><strong>Member Name:</strong> (to be fetched)</p>
            <p><strong>Monthly Fees:</strong> ₹____</p>

            <button style={styles.payBtn}>
              Proceed to Pay
            </button>
          </div>
        )}
      </main>
    </>
  );
}

const styles = {
  main: {
    padding: "60px 20px",
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "center" as const,
  },
  heading: {
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
  },
  input: {
    padding: "14px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #334155",
  },
  button: {
    padding: "14px",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
  },
  confirmBox: {
    backgroundColor: "#020617",
    padding: "20px",
    borderRadius: "10px",
  },
  payBtn: {
    marginTop: "20px",
    padding: "14px",
    width: "100%",
    backgroundColor: "#e11d48",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
  },
};
