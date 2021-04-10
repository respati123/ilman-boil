import { rest } from "msw";

const handlers = [
  rest.post("/login", (req, res, ctx) => {
    return res(
      ctx.json({
        user: {
          id: "6576fa95-1b2b-4055-94a8-73cf393289ff",
          userName: "tyorespati@gmail.com",
          email: "tyorespati@gmail.com",
        },
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjY1NzZmYTk1LTFiMmItNDA1NS05NGE4LTczY2YzOTMyODlmZiIsImp0aSI6Ijg2YjgwYWY5LTEzYWQtNGI0NC1iMzBjLThiZTIzZWRiYjdkMCIsImV4cCI6MTYyNTYzOTYxNCwiaXNzIjoiVmFsaWRJc3N1ZXIiLCJhdWQiOiJWYWxpZEF1ZGllbmNlIn0.YxGt9Icf59xJ9hI2LNG-v0HqO2xI6wyedhzzyPCumx0",
      })
    );
  }),
];

export {handlers}
