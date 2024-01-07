const Profile = () => {
  return (
    <div className="profile">
      <div
        style={{ marginRight: "20px", display: "flex", alignItems: "center" }}
      >
        <img
          src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          style={{
            width: "75px",
            height: "75px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div style={{ marginLeft: "20px" }}>
          <h2>Hi Mike!</h2>
          <p>Welcome Back!</p>
        </div>
      </div>

      <div>
        <h4>Today</h4>
        <div>
          <h2>＄19,892</h2>
          <p>Account Balance</p>
        </div>
        <div className="profilecards">
          <div>
            {" "}
            <h4>＄4000</h4>
            <p>Year-to-date</p>
          </div>
          <div>
            {" "}
            <h4>＄1892</h4>
            <p>Total Interest</p>
          </div>
        </div>
        <button
          className="profilebutton"
        >
          I want to ▼
        </button>
      </div>
      <div>
        <h3>Recent Transactions</h3>

        <div style={{ margin: "30px 0px" }}>
          <p>20-08-07</p>
          <p style={{ fontSize: "15px", color: "black" }}>
            Withdrawl Transfer to Bank-XXX11
          </p>
        </div>
        <div style={{ margin: "30px 0px" }}>
          <p>20-08-07</p>
          <p style={{ fontSize: "15px", color: "black" }}>
            Withdrawl Transfer to Bank-XXX11
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
