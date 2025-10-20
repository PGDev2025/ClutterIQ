from composio import Composio

googledrive_auth_config_id = "ac_vvz39CRcS7ut"
user_id = "pg-test-5faecf8e-f93d-4670-bd14-4e4c25accfdd"

composio = Composio(api_key="", allow_multiple=True)


def authenticate_toolkit(user_id: str, auth_config_id: str):
    connection_request = composio.connected_accounts.initiate(
        user_id=user_id,
        auth_config_id=auth_config_id,
    )

    print(
        f"Visit this URL to authenticate Google Drive: {connection_request.redirect_url}"
    )

    # This will wait for the auth flow to be completed
    connection_request.wait_for_connection(timeout=15)
    return connection_request.id


connection_id = authenticate_toolkit(user_id, googledrive_auth_config_id)

# You can also verify the connection status using:
connected_account = composio.connected_accounts.get(connection_id)
print(f"Connected account: {connected_account}")
