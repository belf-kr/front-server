import Loading from "../Loading";

type Props = {
  width: string;
  height: string;
  message?: string;
};

export default function LoadingSpinner({ width, height, message }: Props): JSX.Element {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",

          width: width,
          height: height,
        }}
      >
        <Loading width="100px" height="100px" />
        {message && (
          <h3
            style={{
              fontSize: "1.1rem",
            }}
          >
            {message}
          </h3>
        )}
      </div>
    </>
  );
}
