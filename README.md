# Connectopiaa Application Setup

Connectopiaa is a thirdweb and React Vite project for interacting with smart contracts from a React app. The application allows users to interact with the Connectopiaa smart contract and perform various actions.

## Project Structure

The project is structured as follows:

- `/client`: Here we have all the code relating to frontend using React vite
- `/connectopiaa`: Here we have the smart contract code

## Prerequisites

Before running the project locally, make sure you have the following:

- Node.js version 18 installed on your machine.

## Getting Started

To run the code locally, follow these steps:

1. Clone the repository from the [GitHub repository](https://github.com/barackm/connectopiaa).
2. Navigate to the project root directory in your terminal.
3. Install the project dependencies by running the command:

   ```bash
   yarn install
4. Create a `.env` file in the project root directory and set the following environment variable:

    ```plaintext
    VITE_CONTRACT_ADDRESS=<contract_address>

    Replace <contract_address> with the actual address of the deployed smart contract.
5. Start the development server by running the command:

    ```bash
    yarn dev

6. Open your browser and visit `http://localhost:3000` to access the Connectopiaa application.

## Deployment

The Connectopiaa application is deployed and can be accessed online at [Connectopiaa](https://connectopiaa.vercel.app).

