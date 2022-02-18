import Navigation from "./navigation/navigation";

function Layout(props) {
  return (
    <div>
      <Navigation />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
