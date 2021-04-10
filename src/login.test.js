import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";
// import { setupServer } from "msw/node";
import { rest, server } from "./test/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("login component", () => {
  test("execution login", async () => {
    server.use(
      rest.post("/login", (req, res, ctx) => {
        return res(ctx.status(200));
      })
    );

    const { getByPlaceholderText } = render(<Login />);

    fireEvent.change(getByPlaceholderText("email"), {
      target: { value: "tyorespati@gmail.com" },
    });
    fireEvent.change(getByPlaceholderText("password"), {
      target: { value: "Abc,123@" },
    });

    fireEvent.click(screen.getByText("submit"));

    expect(screen.getByPlaceholderText("email")).toHaveValue(
      "tyorespati@gmail.com"
    );
    expect(screen.getByPlaceholderText("password")).toHaveValue("Abc,123@");
  });
});
