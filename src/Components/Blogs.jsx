import useTitle from "./Usetitle";

const Blogs = () => {
  useTitle('Blogs')
  return (
    <div>
      <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-6" >
          <h2 className="text-2xl font-bold text-gray-800">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="text-gray-600 mt-2">By Md. Juber Alam | 19 jan, 2023</p>
          <p className="text-gray-700 mt-4">
            <span className="font-bold">Ans:</span> An access token is a
            security credential that is used to authenticate and authorize a
            user's access to protected resources in a system. It typically has a
            limited lifespan and is issued by an authentication server upon
            successful login. <br /> <br /> A refresh token is a separate token that is used
            to obtain a new access token when the original one expires. Access
            tokens are usually stored in the client-side application's memory or
            local storage, while refresh tokens should be securely stored, such
            as in an HTTP-only cookie or a secure storage mechanism, to prevent
            unauthorized access. Storing tokens securely helps protect against
            security vulnerabilities like cross-site scripting (XSS) attacks.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            2. Compare SQL and NoSQL databases?
          </h2>
          <p className="text-gray-600 mt-2">By Rakibul | 10 May, 2023</p>
          <p className="text-gray-700 mt-4">
            <span className="font-bold">Ans:</span> SQL databases are
            relational, with predefined schemas and use structured query
            language. NoSQL databases are non-relational, flexible, and use
            varied data models like key-value, document, columnar, or graph.
          </p>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            3. What is express js? What is Nest JS?
          </h2>
          <p className="text-gray-600 mt-2">By Abdul Bari | 15 Aug, 2023</p>
          <p className="text-gray-700 mt-4">
            <span className="font-bold">Ans:</span>Express.js is a minimalistic
            and flexible web application framework for Node.js. It provides a
            set of features and tools for building web applications and APIs.
            Express.js simplifies the process of handling HTTP requests,
            routing, middleware management, and templating. <br /> <br />
            Nest.js is a progressive, scalable, and TypeScript-based framework
            for building efficient server-side applications. It is built on top
            of Express.js and adds an additional layer of abstraction and
            structure to the application architecture. Nest.js leverages
            decorators, modules, and dependency injection to enable modularity
            and reusability, making it suitable for large-scale enterprise
            applications. It also offers features like built-in support for
            WebSockets, microservices, and GraphQL, making it a comprehensive
            solution for backend development.
          </p>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">
          4. What is MongoDB aggregate and how does it work?
          </h2>
          <p className="text-gray-600 mt-2">By Jhonkar Mahbub | 10 May, 2023</p>
          <p className="text-gray-700 mt-4">
          <span className="font-bold">Ans:</span>MongoDB's aggregation framework is a powerful tool used for data processing and analysis. It allows you to perform advanced operations on collections of documents in MongoDB. Aggregation pipelines consist of stages that transform the input documents step by step. Each stage in the pipeline performs a specific operation, such as filtering, grouping, sorting, or calculating aggregate values. The output of one stage becomes the input for the next, allowing you to build complex data transformations. Aggregation framework supports various operators and expressions to manipulate and manipulate data, enabling flexible data aggregation and analysis in MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
