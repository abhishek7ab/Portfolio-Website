<div align="center">

# 💼 Corporate Employee Management System

> Production-ready enterprise Spring Boot RESTful API service for corporate human resource directory management, featuring relational persistence, H2 console, and Postman test automation.

[![Java](https://img.shields.io/badge/Java-21%20%7C%2025-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Maven](https://img.shields.io/badge/Maven-3.9+-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)](https://maven.apache.org/)
[![Database](https://img.shields.io/badge/Database-H2%20Relational-4479A1?style=for-the-badge&logo=databricks&logoColor=white)](https://www.h2database.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

## 🚀 Key Features

- **⚡ Full RESTful CRUD Lifecycle**: Endpoints for creating, querying, updating, and removing employee profiles.
- **🛡️ Validation & Error Handling**: Input validation on emails, department assignments, and employee identification.
- **💾 Relational Persistence**: H2 local file-backed relational database storage (`./data/employees`).
- **🔍 Embedded Web Console**: Web management GUI at `/h2-console` for live database inspection.
- **📮 Automated Testing**: Postman collection integration for API smoke and regression testing.

---

## 📡 API Endpoints Specification

| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/employees` | Retrieve list of all registered employees | `200 OK` |
| `GET` | `/api/employees/{id}` | Fetch detailed record of an employee by ID | `200 OK` / `404 Not Found` |
| `POST` | `/api/employees` | Register a new employee | `201 Created` |
| `PUT` | `/api/employees/{id}` | Update existing employee record | `200 OK` |
| `DELETE`| `/api/employees/{id}` | Remove employee from active registry | `204 No Content` |

### Sample JSON Request Body (`POST /api/employees`)
```json
{
  "firstName": "Asha",
  "lastName": "Sharma",
  "email": "asha.sharma@example.com",
  "department": "Engineering"
}
```

---

## 🛠️ Quick Local Setup

### Prerequisites
- **JDK**: Java 21 or Java 25
- **Maven**: 3.9+ (or use included `./mvnw`)

### 1. Clone & Run
```bash
git clone https://github.com/abhishek7ab/Employee-Management-system.git
cd Employee-Management-system

# Run Spring Boot service
mvn spring-boot:run
```

The API service runs at: `http://localhost:8080`

### 2. Access H2 Database Console
Visit: `http://localhost:8080/h2-console`
- **JDBC URL**: `jdbc:h2:file:./data/employees`
- **User Name**: `sa`
- **Password**: *(leave empty)*

---

## 📜 License
MIT License
