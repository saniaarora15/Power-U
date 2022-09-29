import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './Profile.css';
export default function Profile() {
  return (
    <section className="vh-100" >
      <MDBContainer className="py-10 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
              <MDBCol md="15" className="gradient-custom text-center text-white"
                  style={{ borderRadius: '.5rem', marginRight:"50%" }}>
                  <MDBCardImage src="https://th.bing.com/th/id/R.56c5e471fffcd558b9d508830af78a3a?rik=EeFZyf0xjpoEZg&riu=http%3a%2f%2fgetdrawings.com%2fvectors%2fhuman-symbol-vector-1.png&ehk=WZD17UI9cYgNw7DXsvHZKozfJe7YR%2bWzs2RuO0oCHCM%3d&risl=&pid=ImgRaw&r=0"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6"><h3>My Proile</h3></MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                    <MDBCol size="7" className="mb-3">
                        <MDBTypography tag="h6"><h5>Name</h5></MDBTypography>
                        <MDBCardText className="text-muted">Rashmi K R</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="7" className="mb-3">
                        <MDBTypography tag="h6"><h5>Email</h5></MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                    <MDBCol size="7" className="mb-3">
                        <MDBTypography tag="h6"><h5>Phone</h5></MDBTypography>
                        <MDBCardText className="text-muted">9964578956</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
