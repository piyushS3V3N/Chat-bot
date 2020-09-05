from __future__ import print_function
from apiclient import errors
import os 
import pickle
from httplib2 import Http
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import base64
import binascii
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
#from google.oauth2 import service_account

def create_message(sender, to , subject , message):
	message = MIMEText(message)
	message['to'] = to
	message['from'] = sender
	message['subject'] = subject
	print(type(message.as_string()))
	return {'raw': base64.urlsafe_b64encode(message.as_bytes()).decode()}

def send_message(service, user_id, message):
	try:
		message = service.users().messages().send(userId=user_id, body=message).execute()
		print('Message Id : %s ' % message['id'])
		return message
	except Exception as e:
		print('An error occurred: %s ' % e)
		return None
def service_account_login():
	creds = None
	SCOPES= ['https://www.googleapis.com/auth/gmail.send']	
	SERVICE_ACCOUNT_FILE='service-key.json'
	if os.path.exists('token.pickle'):
		with open('token.pickle', 'rb') as token:
			creds = pickle.load(token)
	if not creds or not creds.valid:
		if creds and creds.expired and creds.refresh_token:
			creds.refresh(Request())
		else:
			flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
			creds = flow.run_local_server(port=0)
		with open('token.pickle', 'wb') as token:
			pickle.dump(creds, token)	
	delegate_credentials = creds
	#delegate_credentials = creds.with_subject(EMAIL_FROM)
	service = build('gmail','v1',credentials=delegate_credentials)
	return service
EMAIL_FROM = 'piyushparashar2k@gmail.com' # trinitxyz@gmail.com
EMAIL_TO = 'kali12nat07@gmail.com' #Selected from input =>
EMAIL_SUBJECT = 'Hello There'  # Depends on Query
EMAIL_CONTENT = 'HEllo this is a test' # Depends on Query
################################################################################
# xyz Person applied/Queried for xyz course/position immediate action required #
################################################################################
service = service_account_login()
message = create_message(EMAIL_FROM,EMAIL_TO,EMAIL_SUBJECT,EMAIL_CONTENT)
sent = send_message(service,'me',message)