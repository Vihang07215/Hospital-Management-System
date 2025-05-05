# Hospital-Management-System
<h2 align="left">Introduction:</h2>

The Hospital Management System streamlines Combining booking, user, and doctor modules allows the Hospital Management System to simplify processes. Users, that is managers or patients, can register, log in, and review their profiles. Through comprehensive profiles spanning availability, experience, and specialty, doctors enable patients to quickly choose the appropriate healthcare practitioner. Linking patients with doctors, the booking system stores appointment information like date, time, and status, thereby helping to organize visits. This system guarantees effective operation of hospital services, therefore improving patient experience and administrative capacity management.

<h2 align="left">Key Features:</h2>

- **User Management**
    - safely register and log in for patients, doctors, and administrators.
    - Various patient, doctor, and administrator access dictated by duties.
- **Doctor Profiles**
    - Complete doctor profiles include availability, experience, cost of consultations, and knowledge.
    - Real time data and status scheduling changes.
- **Appointment Booking**
    - Simple visit schedule depending on chosen doctors.
    - Booking status tracked in real time: pending, confirmed, or completed.
- **Comprehensive Record Keeping**
    - consolidated doctor and user data storage for simple access
    - Including booking past can help to better control patient visits.
- **Admin Control**
    - Administrative control supports manager of doctor and user records.
    - Possibility of following and fixing problems at the level of systems.
- **Secure Data Management**
    - Fragmented passwords and careful data security define safe data management.
    - Data architecture grounded on connections for management and complete traceability.
    
<h2 align="left">Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)

<h2 align="left">Testing Tools Used:</h2>

![PostMan Github](https://github.com/user-attachments/assets/3381c639-715f-40b9-85d3-08384553ee12)

<h2 align="left">Library:</h2>

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- express-session
- express-validator
- jsonwebtoken
- mongoose
- nodemon
- validator
- nodemailer

<h2 align="left">Database Structure</h2>

The platform will require a relational database to manage User,Doctor and Booking . Below is a proposed database structure with the key tables.

### **Tables**:

---

### a) User

| **Field Name** | **Type** |
| --- | --- |
| email | String |
| isDoctor | Boolean |
| name | String |
| password | String |
| isAdmin | Boolean |

### b)  Doctor

| **Field Name** | **Type** |
| --- | --- |
| firstName | String |
| lastName | String |
| phoneNumber | Number |
| address | String |
| department | String |
| specialization | String |
| experience | String |
| timings | String |
| feePerConsultation | Number |
| userId | Ref. Object → User |
| website | String |
| status | String |

### c) Booking

| **Field Name** | **Type** |
| --- | --- |
| userId | String |
| doctorId | password |
| doctorInfo | Ref. Object → Doctor |
| date | String |
| status | Date |
| time | String |
| userInfo | Ref. Object → User |



<h2 align="left">Use Cases:</h2>



### 1. Personal Reference

- User Safe Registration and Login enables users log in safely.
- Manages and assigns administrative, doctor, patient, or similarly based user roles.
- profile Update users have personal data changing ability.

### **2. Doctor Model**

- Create your doctor profile here. It allows doctors to set their profiles according to availability and specific knowledge.
- Depending on experience, department, or specialty, patients can search doctors.
- **Update Availability**: Doctors could adjust their working schedule or status.

### **3. Booking Model**

- **Schedule Appointment**: Patients can schedule doctors by Schedule
- Update Appointment Status:allows doctors or administrators to confirm or cancel appointments.
- **Track Appointment History**: doctors and patients can view past bookings.
  
