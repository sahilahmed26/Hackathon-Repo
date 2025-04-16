export const metrics = {
  totalSamples: 792,
  trainSamples: 633,
  testSamples: 159,
};

export const finalMetrices ={
    totalTicket:20,
    totalTaxonomy:12
}

export const accuracyData = [
  { model: "ANN_BOW", value: 70 },
  { model: "RF_BOW", value: 68 },
  { model: "ANN_WE", value: 66 },
  { model: "RF_Tfidf", value: 66 },
  { model: "XGB_Tfidf", value: 66 },
  { model: "RF_WE", value: 65 },
  { model: "ANN_Tfidf", value: 65 },
  { model: "XGB_WE", value: 65 },
  { model: "XGB_BOW", value: 63 },
  { model: "XGB_BERT", value: 60 },
  { model: "RF_BERT", value: 59 },
  { model: "RF_GloVe", value: 56 },
  { model: "XGB_GloVe", value: 53 },
];

export const finalModelAccuracy = [
    { model: "llama 3.2", value: 68 },
    { model: "deepSeek R1", value: 76 }
  ];
  

export const trainingCategories = [
  { name: "Trading", value: 380 },
  { name: "Valuation", value: 82 },
  { name: "Reporting", value: 63 },
  { name: "Other", value: 57 },
  { name: "Market Data", value: 51 },
];

export const predictedCategories = [
  { name: "Trading", value: 114 },
  { name: "Valuation", value: 19 },
  { name: "Reporting", value: 10 },
  { name: "Market Data", value: 8 },
  { name: "Other", value: 8 },
];

export const FinalData = [
  {
    ID: 234,
    Name: "BBC: Platform: How to set idle time for automatic lockout for user locally",
    Description:
      'Current Behaviour: Customer want to lock out users locally (in any SAP/non-SAP system) after users are idle in local system for certain period/days. PLC offers this feature but doesn\'t mention anywhere how much is the user idle period considered & where to set the idle period.\nExpected Behaviour: Customer wants to know where to set the user idle period before automatically locking the user account.\nRepro-Steps:\nNavigate to Access > Automation Tools > Automatic User Lock > Automatic User Lock Configuration & check/set the user\nDiscussion:\nSwapnil Karode - 15/4/2025, 3:47:38 pm\nCan you please process / route this further.\ncc:\nDmart Production Hypercare - workflow getting stuck at steps like "Create Child Request", "Attach Roles", or "Send email Notification"',
    Category: "Feature Request",
    Subcategory: "UI/UX Improvements",
    Sentiment: "Positive",
    Other: "Error",
  },
  {
    ID: 2123,
    Name: 'Dmart Production Hypercare - workflow getting stuck at steps like "Create Child Request", "Attach Roles", or "Send email Notification"',
    Description:
      'Background:\nCustomer uses a parent workflow named Position to Role Mapping for assigning one or more roles to a position (in SAP).\nThe assignment of role is taken care by child workflow named Position to Role Mapping - Child Request.\nIf more than one role are selected in parent workflow, then parent workflow opens one child workflow for each role.\nFor example, if 3 roles were selected in parent workflow, then parent workflow opens 3 child workflows - one for each role."Error"d then child workflow runs a script which assigns role to position in SAP.\nIssue:\nBoth parent and child workflows are getting stuck at automatic steps like "Create Child Request", "Attach Roles", and "Send email Notification"\n1. Workflow Position to Role Mapping is getting stuck at step "Create Child Request"\nFor example, parent request 75989 is stuck.\n2. Workflow Position to Role Mapping - Child Request is getting stuck at steps "Attach Roles", or "Send email Notification"\nFor example, child request 75994 is stuck.\nApplication Log does not show any error or any log that indicates why workflows are stuck in these steps.\nThis issue did not occur before upgrading PLC version.\nPLC version was upgraded to new version Created On: 02/11/2025 12:10:04 NV_48 on 07th April 2025.\nThere is no workflow request from 1st Jan 2025 to 06th April 2025 which is stuck at such steps for these two or any other workflows.\nBusiness Impact:\nBecause of this issue, customer is forced to create multiple requests - one request per role - which otherwise they can input multiple roles in a single request.\nThe project is in hyper-care phase and requires immediate fix to the issue.\nRepro-Steps:\n1. Deploy PLC on-premise build (NV_48) created on: 02/11/2025 12:10:04 in your Windows server.\n2. Import two attached workflows named "Position to Role Mapping" and "Position to Role Mapping - Child Request" in your PLC on-premise environment.\n3. Copy attached file "BDC_PP02_Update.txt" to "C:\\XpandionData\\Extensions" in your Windows server.\nThis script file when executed by child workflow - it attaches roles selected in request to Position (in SAP)\n4. Submit a request on parent workflow and select more than one roles.\n5. For each role selected in parent request, a child workflow will open.\n6. Please verify whether all steps of both parent and child workflows are executed - i.e. no workflows should be stuck at any step.\nDiscussion:\nYashodhan More - 15/4/2025, 3:32:46 pm\nHi  and  - Requesting your attention into this production issue of customer namedDMart.\ncc -\nSPX: JDE Connection Issue',
    Category: "Bug / Issue",
    Subcategory: "Performance Problems",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 1123,
    Name: "SPX: JDE Connection Issue",
    Description:
      "We recently upgraded customer's PTD to latest version of PLC.\nOne of the connected systems is having connection issue after updating the Data source as per customer's information.\nRepro-Steps:\nLogin to PLC\nNavigate to Technical Configuration > Connected Systems > System Parameters\nSelect System: JDE\nPerform Test Configuration\nRelated Work:\nRelated (1)\nSPX: JDE Connection Issue-Copy | 31802 Bug\nKohler: External Table Import Process Failed for several EDTs / Agent disconnected",
    Category: "Bug / Issue",
    Subcategory: "Connection and Integration Issues",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 2562,
    Name: "Kohler: External Table Import Process Failed for several EDTs / Agent disconnected",
    Description:
      "The External Table Import process failed for several EDTs on April 13th and 14th. Noticed EDT import process for 14th was still Running and also observed the Agent connection was lost. Customer logged into Agent VM and restarted the Cloud Client service, and subsequently the EDT Import process completed for remaining EDTs. Refer to attachments for details of the EDT import logs as well as Client logs.\nWe should be giving a more descriptive error for diagnosis if Agent connection is lost.\nRepro-Steps:\nReview client logs to determine why Agent connection was lost (customer observed VM and service were running, but restarting service seems to have fixed processing issue)\nBusiness role not showing on employee record.",
    Category: "Bug / Issue",
    Subcategory: "Connection and Integration Issues",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 1119,
    Name: "Business role not showing on employee record.",
    Description:
      'This issue started after the upgrade from 2024.3.0 to 2024.4.1.\n\n"16009045\t11/4/2025 20:46:52\t1\tw3wp\tBIZ\\McDonPet\t"Error: Exception , Error on RFC_READ_TABLE(~,,USR04,-1,-1,Xpandion.ProfileTailor.SapProxy.TAB512Table,Xpandion.ProfileTailor.SapProxy.RFC_DB_FLDTable,Xpandion.ProfileTailor.SapProxy.RFC_DB_OPTTable)\nAdditionally, this is suspected to be linked to ADO ticket  since some of the requests (under the WF: Create User or Assign Authorizations) have no error, but there are errors in the App Logs regarding OPTION_NOT_VALID.\nWe\'re seeing a problem when submitting SBR requests — the roles included in the SBR are being assigned as ULEs instead.\nFor example, user WongDav submitted a business role request in P1A (3232945). The request was approved but is now showing as no SBR assigned. Later, when we submitted an additional ULE request, it was rejected because the system showed the user has no SBR.\nAdditionally, Thomas Hjelm mentioned that in Elux Prod, WF 3239645 revoked the previous BR and its roles, then assigned only the contents of the new BR — but not the BR itself, so it’s missing.\nAttached is an Excel file listing all revoked and added roles.\nP.S.: Also, once this is resolved, we’ll need a way to update the system — we won’t be able to reassign all access manually. A SQL script will likely be needed.\nCc:\nRepro-Steps:\nUpgrade On-Prem to 2024.4.0.\nImport the attach WF.\nSubmit a request to assign the BR.\nView that the BR itself is missing, and only its contents are assigned.\nRelated Work:\nRelated (1)\nPathlock process - Synchronize Change Documents | Error: SAP.Middleware.Connector.RfcAbapException: OPTION_NOT_VALID | 29950 Issue Report\nDiscussion:\nPatricia Rada - 15/4/2025, 4:24:02 pm\ncan you please upload the latest application logs for this issue as well, Eyal and I are struggling to understand what the issue is and we need to get on a call and see which workflow you are using to do this and what is impacted.\nEyal Gottlieb - 15/4/2025, 1:18:35 pm\nI have tried pinging you in the chat, please ping me back when you can\nI need to fully understand the issue and complete missing or misfit information\nEyal Gottlieb - 15/4/2025, 12:56:17 pm\nNot sure this should be considered as severity 1 but i follow the procedure\nIve sent notification as requested but they are all not available at this time\nIn any case this looks like an issue connecting to SAP, please take a look at this"Error"anda Wisely - 15/4/2025, 12:48:49 am\nPfb USR04 table error logs:\nPerformance Issues on Organic Valley Preprod Environment',
    Category: "Bug / Issue",
    Subcategory: "Connection and Integration Issues",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 2901,
    Name: "Performance Issues on Organic Valley Preprod Environment",
    Description:
      "There are performance issues on . Pages are slow to load and even pages that present a small list of items (e.g. 50 rows) take a while to load and are not performant. Specific example as I was creating this ticket: the System Status page took over 30 seconds to load.\nThis has been raised in the past several times, and in those cases the system was restarted to try to resolve the issue. Restarting seems to resolve the issue temporarily, but we're at a point now where additional resources need to be allocated to the environment.\nRepro-Steps:\nNavigate through the organicvalley.preprod.pathlockgrc.com environment\nDiscussion:\nMark Lynch - 14/4/2025, 9:14:52 pm\nFYI\nSAP HANA DB Connector Requirement Clarification",
    Category: "Performance Problems",
    Subcategory: "Performance Issues, Infrastructure / Setup",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 7,
    Name: "SAP HANA DB Connector Requirement Clarification",
    Description:
      "A SAP HANA Client version 2.16.21 need to be installed. Can you clarify where should we install this client? Will it be in the same VM where the cloud agent is installed, or will it be in the HANA DB server, or will it be in the PLC server?\nDiscussion:\nEyal Gottlieb - 14/4/2025, 4:36:47 pm\nWho is this ticket referring to\nWhat is the issue (what you wanted to do, what you did, what you expected to happen and what actually happened)\nEvidenced (Screen shots, logs, workflows...)\nSystem version, Customer, Priority\nUS Sugar - SAP ECC Connector - Read Role List",
    Category: "Feature Request",
    Subcategory: "UI/UX Improvements",
    Sentiment: "Neutral",
    Other: "Error",
  },
  {
    ID: 8,
    Name: "US Sugar - SAP ECC Connector - Read Role List",
    Description:
      "In our data validation, we’ve observed a discrepancy between the number of roles present in the SAP ECC on-prem target system and the number of roles synced into Pathlock Cloud (PLC) via cloud sync. Specifically, the total number of roles reflected in PLC does not match the number of roles in the ECC target system.\nCould you please help clarify the logic used by the PLC connector to read and sync roles from SAP ECC? We’re trying to understand if there are any filters, conditions, or limitations applied during the role synchronization process that could explain the difference.\nNote that, we already flag the “Include Roles without Profiles” in the Advance configuration.\nRepro-Steps:\nLogin to Pathlock cloud preprod:\nNavigate to Access > Technical Roles\nSelect/Filter the system: ECCSUD400\nClick Display\nCount and List of roles are displayed on the screen.\nThe customer provided an extract of the AGR_DEFINE table from their SAP system ECCSUD400, which contains a total of 6,220 roles.\nHowever, in PLC, there are only 2,252 roles available for the connector ECCSUD400.\nNote: This discrepancy is observed across all ECC-connected target systems. However, for the purpose of this analysis, we are presenting data from one system first.\nDiscussion:\nBhagyashri Yamulakar - 11/4/2025, 8:41:14 pm\nHi  and\nPlease provide the required field like Priority, severity.\nThanks,\nBhagyashri\nCC\nBoston Beer | Issue Encountered While Cancelling Delegation Request",
    Category: "Bug / Issue",
    Subcategory: "Data Consistency / Sync Issues",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 9,
    Name: "Boston Beer | Issue Encountered While Cancelling Delegation Request",
    Description:
      "We are facing an issue while cancelling the approval delegation in Boston Beer.\nIssue: When a role owner (delegator) assigns a user as a delegate for a specific period, and the delegate is already a member of the same approval group as the delegator, we have observed an issue. Upon the cancellation of the delegation by the delegator, the delegate is also removed from the approval group, even if the delegate was a member before the delegation. Since role owners may not always be aware of the existing members of their approval groups, this process of assigning and canceling delegations could inadvertently lead to the removal of approvers from their groups.\nExpectation: Upon cancellation of the delegation request by the delegator, the delegate should only be removed as a delegate approval for the delegator. Delegate should not be removed from the approval group in which both the delegator and delegate were present before the delegation request was created.\nBusiness Impact: Go-Live is impacted for the customer.\nRepro-Steps:\nGo to PLC portal page and click on 'Delegate Approval Request' tab.\nSetup another user as delegate for your User (both the delegator and delegate also needs to part of at least one approval group together).\nSubmit the delegation request.\nCreate another request to cancel the delegation request.\nOnce the delegation is cancelled, if we check the approval group now in which both the delegator and delegate were present, the delegate is now also removed from this approval group permanently.\nAfter cancelling the delegation:\nPathlock Change Logs:\nInstance details:\nDiscussion:\nStephanie Thompson - 14/4/2025, 6:53:22 pm\nUpdated to reflect this issue is a blocker.\nUAT dates for Provisioning:  4/3-5/7\nProvisioning Go Live Technical Target Date:  5/30\nThis is similar to Bug 25094.\nGaurav Singh - 11/4/2025, 7:26:16 pm\nplease review and assign it to PE team.\nBBC: Pathlock Roles: Custom built role isn't working as expected",
    Category: "Bug / Issue",
    Subcategory: "Data Consistency / Sync Issues",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 10,
    Name: "BBC: Pathlock Roles: Custom built role isn't working as expected",
    Description:
      "Customer needs a custom role created with name as 'BBC RMR Pathlock Admin'. The custom role configuration is attached for reference.\nCurrent behaviour:\nUser is unable to perform below tasks -\n1. Upload ruleset xls file from the Risks screen\n2. Create / add new mitigation control\nExpected behaviour\n:\nUser should not be able to perform above operations with the 'BBC RMR Pathlock Admin' custom role access. Please confirm if custom role created needs any modifications.\nRepro-Steps:\nRepro steps for - Unable to upload ruleset xls file from the Risks screen\nLogin with user having custom role 'BBC RMR Pathlock Admin' assigned.\nGo to Compliance > Risks > Actions & try to upload rule set.\nRepro steps for - Unable to create / add new mitigation control\nLogin with user having custom role 'BBC RMR Pathlock Admin' assigned.\nGo to Compliance > Controls & click on 'New Control' button to add new mitigation control\nDiscussion:\nKeri Bowman - 11/4/2025, 10:00:50 pm\nplease utilize the severity matrix to select the severity associated to each project stage. Based on BBC ARA prepping for go-live but not at risk of contract loss, this is a Severity 3. I have updated this accordingly. It is important that severities be properly reflected as it impacts how the product experts, engineers and managers organize their resources.\ncc\nBhagyashri Yamulakar - 11/4/2025, 9:54:57 pm\nHi  and ,\nSince the business is not impacted due to the Custom Role and its actions, could you please reduce the severity?\nThanks,\nBhagyashri\nCC\nBhagyashri Yamulakar - 11/4/2025, 8:35:22 pm\nHi\nPlease provide the customer's name.\nThanks,\nBhagyashri\nCC\nSwapnil Karode - 11/4/2025, 12:50:59 pm\n@Eyal Gottlieb Please process / route this further.\ncc: @Vineet Aggarwal @Stephanie Thompson @Gaurav Singh\nBBC: Pathlock Roles: Role 'Enable edit' doesn't function as expected",
    Category: "Bug / Issue",
    Subcategory: "Connection and Integration Issues",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 11,
    Name: "BBC: Pathlock Roles: Role 'Enable edit' doesn't function as expected",
    Description:
      "Customer needs a custom role created with name as 'BBC SAP Security Admin'. The custom role configuration is attached for reference.\nCurrent behaviour:\nUser is able to perform below tasks despite not having Enable edit role assigned.\n1. Able to edit existing risks.\n2. Allows to activate/deactivate individual mitigation controls\nExpected behaviour\n:\nUser should not be able to perform above operations despite not having Enable edit role access. Please confirm if custom role 'BBC SAP Security Admin' created needs any modifications.\nRepro-Steps:\nRepro steps for - Able to edit existing risks.\nLogin with user having custom role 'BBC SAP Security Admin' assigned.\nGo to Compliance > Risks & try editing any risk.\nRepro steps for - Allows to activate/deactivate individual mitigation controls\nLogin with user having custom role 'BBC SAP Security Admin' assigned\nGo to Compliance > Controls & try to activate/deactivate any mitigation control.\nDiscussion:\nBhagyashri Yamulakar - 15/4/2025, 11:54:38 am\nThanks\nCC\nWorking on this.\nKeri Bowman - 11/4/2025, 10:03:01 pm\n- I have updated the severity to reflect that this project stage is prepping for go-live but not at risk of contract loss, making this a Sev 3.\ncc\nBhagyashri Yamulakar - 11/4/2025, 9:55:09 pm\nHi  and ,\nSince the business is not impacted due to the Custom Role and its actions, could you please reduce the severity?\nThanks,\nBhagyashri\nCC\nSwapnil Karode - 11/4/2025, 12:33:16 pm\nPlease process / route this further.\ncc:\nSupport for encrypted SAML based SSO integration",
    Category: "Bug / Issue",
    Subcategory: "Data Consistency / Sync Issues",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 12,
    Name: "Support for encrypted SAML based SSO integration",
    Description:
      "Customer would like to have SAML based SSO integration with PLC, but need the whole SAML token sent from IDP to PLC (service provider) to be encrypted using PLC's public key which will then be decrypted by PLC using a private key.\nAs per customer this is a part of their compliance requirement and is needed to prevent Man in middle or any spoofing of SAML tokens type of attacks.\nPlease let us know if such a configuration is possible?\nThis will also need Pathlock to provide their publick key along with other metadata items to the customer.\nDiscussion:\nVineet Aggarwal - 11/4/2025, 6:57:04 am\nSession timeout for Pathlock when using SSO",
    Category: "Feature Request",
    Subcategory: "UI/UX Improvements",
    Sentiment: "Positive",
    Other: "Error",
  },
  {
    ID: 13,
    Name: "Session timeout for Pathlock when using SSO",
    Description:
      "Customer is looking for setting a session timeout for Pathlock when integrated with SSO. Currently, once a user logs in, the session remains active for an indefinite period of time and user is not asked to re-authenticate.\nRequirement from customer is to be able to set a session timeout at application level.\nRepro-Steps:\nIntegrate PLC with SSO (Entra ID)\nLog in as end user\nSession never times out.\nDiscussion:\nVineet Aggarwal - 11/4/2025, 6:45:03 am\ncan you please let us know if Pathlock currently has this configuration?\nKimberly Clark: EAM: Issue with Parsing Change Logs from SAP into PLC",
    Category: "Feature Request",
    Subcategory: "UI/UX Improvements",
    Sentiment: "Positive",
    Other: "Error",
  },
  {
    ID: 14,
    Name: "Kimberly Clark: EAM: Issue with Parsing Change Logs from SAP into PLC",
    Description:
      "Customer: Kimberly Clark\nSeverity: Critical\nIssue: The EAM sesssion is used to make changes, the change logs in PLC is showing incorrect information which is not matching with the actual header information about that table in SAP.\nThe Connector is pulling the results correctly however it is not parsed properly while writing into EAM Logs.\nBusiness Reason:\nEAM Logs should not show the incorrect information due to Audit implication and its termed as Golive Blocker.\nDetailed Observation:\nIn ADR6 table the Address Number and Person Number fields values are switched.\nThe values 10000109777 is printed as 1000010977 and leading last digit (7) is moved to next field.\nThe Other fields\nChange Logs from SAP:\nEAM Log:\nRepro-Steps:\n1) Start the EAM Session.\n2) Update the user address records using SU01. Ensure the user has address records maintained.\n3) Sync the EAM log. Verify the logs in Connector test and in EAM logs.\nRelated Work:\nChild (1)\nConnector action for reading EAM log retrieves wrong value for Record Key which results in incorrect date | 31780 Bug\nDiscussion:\nOleg Firumiants - 14/4/2025, 7:29:56 pm\nPR  raised  to apply changes into cloud/master-2025.1.0\nEyal Gottlieb - 14/4/2025, 3:07:33 pm\n,\nBug report created\nEyal Gottlieb - 14/4/2025, 2:49:24 pm\nOpening a bug report for this now\nRahul Sharma - 11/4/2025, 9:14:19 pm\nPlease triage this issue to the right owner, I can tell you this is a defect in parsing. Its not happening for all tables in change log. Currently it is reported for SAP Address table but SAP has thousands of table so it could happen with other tables.\nSome needs to be look at the logic of parting the Information from Connector and Writing into the EAM logs and check where the gap is based on the example shared.\nCC\nStephanie Thompson - 11/4/2025, 5:21:15 pm\nKC/PWC is in UAT testing. Go Live is targeted fo\nOperation - IsUserExist is failing during User Creation Process",
    Category: "Bug / Issue",
    Subcategory: "Data Consistency / Sync Issues",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 15,
    Name: "Operation - IsUserExist is failing during User Creation Process",
    Description:
      'During Create User Operation via the workflow, we are getting below error.\nThe remote server returned an error: (400) Bad Request. Type: RestWebService Host: w3wp More Information: Error Source: Pathlock.Cloud.LINQtoCSV Error Area: Xpandion.ProfileTailor.Common Current System: Oracle Fusion Message: The remote server returned an error: (400) Bad Request. Http Code: 400 Returned Message: Service call error: Status code: 400 BadRequest https://ecvt-test.fa.us2.oraclecloud.com//hcmRestApi/scim/Users/?startIndex=500&count=500 { "Errors" : [ { "description" : "The value for startIndex isn\'t valid. (ASE-4335082)", "code" : "400" } ] } Username = Pathlocktest31 windowsUsername = roleCustomAttribute10 = workflowId = 33847 copyReferenceUser = StartDate_DateFormat = yyyy/MM/dd HH:mm:ss EndDate_DateFormat = yyyy/MM/dd HH:mm:ss startIndex = 1 itemsPerPage = 500 audit_batch_changedbyusers = 50 audit_batch_changedocuments = 2 fromDate_DateFormat = dd/MM/yyyy HH:mm:ss toDate_DateFormat = dd/MM/yyyy HH:mm:ss hrtreetype = hrtreecode = language = settings_PersistDB = False settings_SystemType = 120 settings_IsInLearningPhase = True settings_LearningPhaseRange = 0 settings_SaveHistory = False settings_SapHostName = https://ecvt-test.fa.us2.oraclecloud.com/ settings_SapSystemNumber = 0 settings_SapClientNumber = settings_IsClientDependant = False settings_SamplingRate = 0 settings_UpdateAD = False settings_TimeSliceInDays = 100 settings_SapUserName = Pathlock.Integration settings_Language = EN settings_Domain = settings_ExtendedRfcLogRead = h:1 settings_IsExtendedRfcLogRead = False settings_LanguageToDisplay = settings_ChangeDocuments = settings_SystemId = 1 settings_CuaSystemId = settings_SecondaryUserName = settings_ApplicationURL = settings_Attribute1 = settings_Attribute2 = settings_Attribute3 = settings_Attribute4 = settings_Attribute5 = settings_Attribute6 = settings_Attribute7 = settings_Attribute8 = settings_Attribute9 = settings_Attribute10 = settings_Attribute11 = settings_Attribute12 = settings_Attribute13 = settings_Attribute14 = settings_Attribute15 = settings_EndTimeRange = 12/31/2024 13:52:19 settings_ReadAuditDataEvery = -1 settings_DisableCua = False settings_TimeZoneId = UTC _database = SystemId = 1 ParametersForJson = {}\nOn Debugging further with Lovekesh, if we identified this as pagination issue and was able to replicate the issue with IsUserExist Operation via Connector Configuration Test with web service log as -\n{ "Errors" : [ { "description" : "The value for startIndex isn\'t valid. (ASE-4335082)", "code" : "400" } ] }\nRepro-Steps:\nConnection Config Test-> IsUserExist-> PathlockTest33 (any existing user in PLC)\nRelated Work:\nRelated (1)\n[CON] Operation - IsUserExist is failing during User Creation Process | 31815 Bug\nDiscussion:\nBipin Mishra - 10/4/2025, 10:58:33 pm\nCC-\nBayer: Access/Technical Roles: Activity count in PLC is not matching for Parent and its Derived roles',
    Category: "Bug / Issue",
    Subcategory: "Data Consistency / Sync Issues",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 16,
    Name: "Bayer: Access/Technical Roles: Activity count in PLC is not matching for Parent and its Derived roles",
    Description:
      "Team,\nActivity count in PLC is not matching for Parent and its Derived roles.\nParent role ADTSR_MM_RECPRL02 in PLC has 52 activities in DM4, whereas its derived role ADTSR_MD_RECPRL02_XDXC_C5CALL in PLC has 36 activities.\n(We see the similar behavior for PM4 system as well).\nPlease see the attached role content reports for both roles.\nIdeally it should be same as the role menus for parent and derived role has same values in the backend\nsystem.\nNot sure if the data synching behavior is different for the parent and derived roles.\nParent role ADTSR_MM_RECPRL02 in PLC has 52 activities\nDerived role ADTSR_MD_RECPRL02_XDXC_C5CALL in PLC has 36 activities\nBackend system: DM4\nParent role:\nDerived role:\nWe see below are the extra activities in Parent role in PLC as compared to Derived role.\nBut these activities do exist in the derived role in the backend system, but not showing in the PLC.\nDerived role menu:\nNote: We saw similar issue with other Parent and its derived roles.\nFor example: Parent: ADTSR_DM_RECPDL01 and derived: ADTSR_DD_RECPDL01_XDXC_C5CALL\nLet me know if you need additional information.\ncc:\nRepro-Steps:\n1. Login to PLC system.\n2. Navigate to Access-->Technical Roles\n3. Search for Parent role and check the Activity count\n4. Search for Derived role and check the Activity count.\nUsage Logs in EAM session are not displayed for Salesforce",
    Category: "Bug / Issue",
    Subcategory: "Data Consistency / Sync Issues",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 17,
    Name: "Usage Logs in EAM session are not displayed for Salesforce",
    Description:
      'The environment:\nUsage Logs are not displayed in the EAM session, Request number is  on Orion Live instance\nGetting a 404 error in the web services logs\nRepro-Steps:\nLog in to:\nCreate a new request for Elevated Access Request - Select Roles OB for system SF - Demo (Salesforce)\nSelect User:   crazyray@pathlockselab.onmicrosoft.com - Crazy Ray\nSelect  Role :  System_Administration_PS - System Administration PS\nApprove the new request so roles are assing to the EAM user Crazy Ray\nLog into Salesfoce and do so changes\nNo changes are log in the request\nDiscussion:\nBhagyashri Yamulakar - 15/4/2025, 12:24:42 pm\nAccepted Call.\nThanks,\nBhagyashri\nMiguel Azpeitia - 11/4/2025, 11:50:11 pm"Error"d  Just added more details. Like system and also repro steps. Also schedule a meeting for Tuesday the 15th 8 am. I see you are both available please let me know if this is ok.\nBhagyashri Yamulakar - 11/4/2025, 8:54:24 pm\nHi ,\nPlease provide the environment where you are testing and let me know a convenient time for a call. Additionally, we need more details about the issue or the steps to reproduce it.\nThanks,\nBhagyashri\nCC\nApprove/Decline button remained visible, with no indication or log details confirming the approval',
    Category: "Bug / Issue",
    Subcategory: "Data Consistency / Sync Issues",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 18,
    Name: "Approve/Decline button remained visible, with no indication or log details confirming the approval",
    Description:
      'The "Approve/Decline request..." button remained visible, with no indication or log details confirming the approval.\nHowever, after closing the sub-window, the processed request was removed from the list of pending approval.\nDespite the request being processed, the user would like real-time updates for each approval step to avoid confusion.\nCall recording link:\nhttps://fathom.video/share/MEUhzcu_6y57xJ_8bSVfWYrr9eCu3Wwt\nRepro-Steps:\nThe issue cannot be replicated because it occurs specifically when approvers execute the request approval\nDiscussion:\nBhagyashri Yamulakar - 15/4/2025, 12:43:24 pm\nHi\nPlease let me know a convenient time for us to connect.\nThanks,\nBhagyashri\nCC\nIdonne Caballero - 11/4/2025, 9:31:56 pm\nHi\nDone filling up the Priority.\nMany thanks,\nIdonne\nBhagyashri Yamulakar - 11/4/2025, 8:48:32 pm\nHi  and\nPlease provide priority.\nThanks,\nBhagyashri\nCC\nEmployee to User mapping is not working at Burckhardt Compression',
    Category: "Bug / Issue",
    Subcategory: "Positive",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 19,
    Name: "Employee to User mapping is not working at Burckhardt Compression",
    Description:
      'At Burckhardt Compression, we can see that the user groups were defined.\nWhere the users to user group assignment is based on User Group Rules.\nHere, the issue is the rules are not working for some users (Even though the rules are satisfied with the employee data).\nRepro-Steps:\nUsers were not getting assigned to the user groups based on the user group rules\n(Even though the rules are satisfied with the employee data).\nUser group rule format\n"Employee: Department Level 3 = True AND Department Level 4 = 1 AND Department Level 6 = SAMR AND Employee Id Not Contains onmicrosoft.com"\nUser and Employee data has been placed under attachments section\nAs a part of troubleshooting, we saw that the email address is different between the employee & user data. (Sample users -Matthieu GNAAGI  & Olivier Maire )\nBut here, even though the email is different, the Employee to user mapping is done successfully for the user Laurent VARIOT\nAs a part of troubleshooting after enabling the trace we noticed the below which is working for Laurent VARIOT\nGetEmployeeId for : variot_l Initial ID: Employee ID by EmployeeIdByMappingRules (override): Employee ID by HR System-Wide System: Employee ID by CompanyEmployees (2): Employee ID by Email: Employee ID by provider GetEmployeeIdByUsername:\nWhere this is not working for the user "Olivier Maire"\nGetEmployeeId for : maire_o Initial ID: Employee ID by EmployeeIdByMappingRules (override): Employee ID by HR System-Wide System: Employee ID by CompanyEmployees (2): Employee ID by Email: Employee ID by provider GetEmployeeIdByUsername: Employee ID by provider GetEmployeeIdByMappingRules: Employee ID by provider GetEmployeeIdByWindowsUsername:\nRequest your help us to know where the difference is and how we can overcome this.\nUser Access Review from Excel created without content',
    Category: "Bug / Issue",
    Subcategory: "Data Consistency / Sync Issues",
    Sentiment: "Negative",
    Other: "Error",
  },
  {
    ID: 20,
    Name: "User Access Review from Excel created without content",
    Description:
      "After go-live we repeated the steps done for non-production but the campaign was created syucessfully without content. No errors during campaign creation and the preview was correct. I attached the log file and the instructions. I also added the file uploaded. All was good in non-production so I assume some configuration is missing. Please let me know what else to check compared to what I did listed in the user instruction I created.",
    Category: "Error",
    Subcategory: "Error",
    Sentiment: "Error",
    Other: "Error",
  },
];
// export const FinalData = [
//   {
//     ID: 234,
//     Name: "BBC: Platform: How to set idle time for automatic lockout for user locally",
//     Description:
//       'Current Behaviour: Customer want to lock out users locally (in any SAP/non-SAP system) after users are idle in local system for certain period/days. PLC offers this feature but doesn\'t mention anywhere how much is the user idle period considered & where to set the idle period.\nExpected Behaviour: Customer wants to know where to set the user idle period before automatically locking the user account.\nRepro-Steps:\nNavigate to Access > Automation Tools > Automatic User Lock > Automatic User Lock Configuration & check/set the user\nDiscussion:\nSwapnil Karode - 15/4/2025, 3:47:38 pm\nCan you please process / route this further.\ncc:\nDmart Production Hypercare - workflow getting stuck at steps like "Create Child Request", "Attach Roles", or "Send email Notification"',
//     Category: "Feature Request",
//     Subcategory: "UI/UX Improvements",
//     Sentiment: "Positive",
//     Other: "Error",
//   },
//   {
//     ID: 2123,
//     Name: 'Dmart Production Hypercare - workflow getting stuck at steps like "Create Child Request", "Attach Roles", or "Send email Notification"',
//     Description:
//       'Background:\nCustomer uses a parent workflow named Position to Role Mapping for assigning one or more roles to a position (in SAP).\nThe assignment of role is taken care by child workflow named Position to Role Mapping - Child Request.\nIf more than one role are selected in parent workflow, then parent workflow opens one child workflow for each role.\nFor example, if 3 roles were selected in parent workflow, then parent workflow opens 3 child workflows - one for each role."Error"d then child workflow runs a script which assigns role to position in SAP.\nIssue:\nBoth parent and child workflows are getting stuck at automatic steps like "Create Child Request", "Attach Roles", and "Send email Notification"\n1. Workflow Position to Role Mapping is getting stuck at step "Create Child Request"\nFor example, parent request 75989 is stuck.\n2. Workflow Position to Role Mapping - Child Request is getting stuck at steps "Attach Roles", or "Send email Notification"\nFor example, child request 75994 is stuck.\nApplication Log does not show any error or any log that indicates why workflows are stuck in these steps.\nThis issue did not occur before upgrading PLC version.\nPLC version was upgraded to new version Created On: 02/11/2025 12:10:04 NV_48 on 07th April 2025.\nThere is no workflow request from 1st Jan 2025 to 06th April 2025 which is stuck at such steps for these two or any other workflows.\nBusiness Impact:\nBecause of this issue, customer is forced to create multiple requests - one request per role - which otherwise they can input multiple roles in a single request.\nThe project is in hyper-care phase and requires immediate fix to the issue.\nRepro-Steps:\n1. Deploy PLC on-premise build (NV_48) created on: 02/11/2025 12:10:04 in your Windows server.\n2. Import two attached workflows named "Position to Role Mapping" and "Position to Role Mapping - Child Request" in your PLC on-premise environment.\n3. Copy attached file "BDC_PP02_Update.txt" to "C:\\XpandionData\\Extensions" in your Windows server.\nThis script file when executed by child workflow - it attaches roles selected in request to Position (in SAP)\n4. Submit a request on parent workflow and select more than one roles.\n5. For each role selected in parent request, a child workflow will open.\n6. Please verify whether all steps of both parent and child workflows are executed - i.e. no workflows should be stuck at any step.\nDiscussion:\nYashodhan More - 15/4/2025, 3:32:46 pm\nHi  and  - Requesting your attention into this production issue of customer namedDMart.\ncc -\nSPX: JDE Connection Issue',
//     Category: "Bug / Issue",
//     Subcategory: "Performance Problems",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 1123,
//     Name: "SPX: JDE Connection Issue",
//     Description:
//       "We recently upgraded customer's PTD to latest version of PLC.\nOne of the connected systems is having connection issue after updating the Data source as per customer's information.\nRepro-Steps:\nLogin to PLC\nNavigate to Technical Configuration > Connected Systems > System Parameters\nSelect System: JDE\nPerform Test Configuration\nRelated Work:\nRelated (1)\nSPX: JDE Connection Issue-Copy | 31802 Bug\nKohler: External Table Import Process Failed for several EDTs / Agent disconnected",
//     Category: "Bug / Issue",
//     Subcategory: "Connection and Integration Issues",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 2562,
//     Name: "Kohler: External Table Import Process Failed for several EDTs / Agent disconnected",
//     Description:
//       "The External Table Import process failed for several EDTs on April 13th and 14th. Noticed EDT import process for 14th was still Running and also observed the Agent connection was lost. Customer logged into Agent VM and restarted the Cloud Client service, and subsequently the EDT Import process completed for remaining EDTs. Refer to attachments for details of the EDT import logs as well as Client logs.\nWe should be giving a more descriptive error for diagnosis if Agent connection is lost.\nRepro-Steps:\nReview client logs to determine why Agent connection was lost (customer observed VM and service were running, but restarting service seems to have fixed processing issue)\nBusiness role not showing on employee record.",
//     Category: "Bug / Issue",
//     Subcategory: "Connection and Integration Issues",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 1119,
//     Name: "Business role not showing on employee record.",
//     Description:
//       'This issue started after the upgrade from 2024.3.0 to 2024.4.1.\n\n"16009045\t11/4/2025 20:46:52\t1\tw3wp\tBIZ\\McDonPet\t"Error: Exception , Error on RFC_READ_TABLE(~,,USR04,-1,-1,Xpandion.ProfileTailor.SapProxy.TAB512Table,Xpandion.ProfileTailor.SapProxy.RFC_DB_FLDTable,Xpandion.ProfileTailor.SapProxy.RFC_DB_OPTTable)\nAdditionally, this is suspected to be linked to ADO ticket  since some of the requests (under the WF: Create User or Assign Authorizations) have no error, but there are errors in the App Logs regarding OPTION_NOT_VALID.\nWe\'re seeing a problem when submitting SBR requests — the roles included in the SBR are being assigned as ULEs instead.\nFor example, user WongDav submitted a business role request in P1A (3232945). The request was approved but is now showing as no SBR assigned. Later, when we submitted an additional ULE request, it was rejected because the system showed the user has no SBR.\nAdditionally, Thomas Hjelm mentioned that in Elux Prod, WF 3239645 revoked the previous BR and its roles, then assigned only the contents of the new BR — but not the BR itself, so it’s missing.\nAttached is an Excel file listing all revoked and added roles.\nP.S.: Also, once this is resolved, we’ll need a way to update the system — we won’t be able to reassign all access manually. A SQL script will likely be needed.\nCc:\nRepro-Steps:\nUpgrade On-Prem to 2024.4.0.\nImport the attach WF.\nSubmit a request to assign the BR.\nView that the BR itself is missing, and only its contents are assigned.\nRelated Work:\nRelated (1)\nPathlock process - Synchronize Change Documents | Error: SAP.Middleware.Connector.RfcAbapException: OPTION_NOT_VALID | 29950 Issue Report\nDiscussion:\nPatricia Rada - 15/4/2025, 4:24:02 pm\ncan you please upload the latest application logs for this issue as well, Eyal and I are struggling to understand what the issue is and we need to get on a call and see which workflow you are using to do this and what is impacted.\nEyal Gottlieb - 15/4/2025, 1:18:35 pm\nI have tried pinging you in the chat, please ping me back when you can\nI need to fully understand the issue and complete missing or misfit information\nEyal Gottlieb - 15/4/2025, 12:56:17 pm\nNot sure this should be considered as severity 1 but i follow the procedure\nIve sent notification as requested but they are all not available at this time\nIn any case this looks like an issue connecting to SAP, please take a look at this"Error"anda Wisely - 15/4/2025, 12:48:49 am\nPfb USR04 table error logs:\nPerformance Issues on Organic Valley Preprod Environment',
//     Category: "Bug / Issue",
//     Subcategory: "Connection and Integration Issues",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 2901,
//     Name: "Performance Issues on Organic Valley Preprod Environment",
//     Description:
//       "There are performance issues on . Pages are slow to load and even pages that present a small list of items (e.g. 50 rows) take a while to load and are not performant. Specific example as I was creating this ticket: the System Status page took over 30 seconds to load.\nThis has been raised in the past several times, and in those cases the system was restarted to try to resolve the issue. Restarting seems to resolve the issue temporarily, but we're at a point now where additional resources need to be allocated to the environment.\nRepro-Steps:\nNavigate through the organicvalley.preprod.pathlockgrc.com environment\nDiscussion:\nMark Lynch - 14/4/2025, 9:14:52 pm\nFYI\nSAP HANA DB Connector Requirement Clarification",
//     Category: "Performance Problems",
//     Subcategory: "Performance Issues, Infrastructure / Setup",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 7,
//     Name: "SAP HANA DB Connector Requirement Clarification",
//     Description:
//       "A SAP HANA Client version 2.16.21 need to be installed. Can you clarify where should we install this client? Will it be in the same VM where the cloud agent is installed, or will it be in the HANA DB server, or will it be in the PLC server?\nDiscussion:\nEyal Gottlieb - 14/4/2025, 4:36:47 pm\nWho is this ticket referring to\nWhat is the issue (what you wanted to do, what you did, what you expected to happen and what actually happened)\nEvidenced (Screen shots, logs, workflows...)\nSystem version, Customer, Priority\nUS Sugar - SAP ECC Connector - Read Role List",
//     Category: "Feature Request",
//     Subcategory: "UI/UX Improvements",
//     Sentiment: "Neutral",
//     Other: "Error",
//   },
//   {
//     ID: 8,
//     Name: "US Sugar - SAP ECC Connector - Read Role List",
//     Description:
//       "In our data validation, we’ve observed a discrepancy between the number of roles present in the SAP ECC on-prem target system and the number of roles synced into Pathlock Cloud (PLC) via cloud sync. Specifically, the total number of roles reflected in PLC does not match the number of roles in the ECC target system.\nCould you please help clarify the logic used by the PLC connector to read and sync roles from SAP ECC? We’re trying to understand if there are any filters, conditions, or limitations applied during the role synchronization process that could explain the difference.\nNote that, we already flag the “Include Roles without Profiles” in the Advance configuration.\nRepro-Steps:\nLogin to Pathlock cloud preprod:\nNavigate to Access > Technical Roles\nSelect/Filter the system: ECCSUD400\nClick Display\nCount and List of roles are displayed on the screen.\nThe customer provided an extract of the AGR_DEFINE table from their SAP system ECCSUD400, which contains a total of 6,220 roles.\nHowever, in PLC, there are only 2,252 roles available for the connector ECCSUD400.\nNote: This discrepancy is observed across all ECC-connected target systems. However, for the purpose of this analysis, we are presenting data from one system first.\nDiscussion:\nBhagyashri Yamulakar - 11/4/2025, 8:41:14 pm\nHi  and\nPlease provide the required field like Priority, severity.\nThanks,\nBhagyashri\nCC\nBoston Beer | Issue Encountered While Cancelling Delegation Request",
//     Category: "Bug / Issue",
//     Subcategory: "Data Consistency / Sync Issues",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 9,
//     Name: "Boston Beer | Issue Encountered While Cancelling Delegation Request",
//     Description:
//       "We are facing an issue while cancelling the approval delegation in Boston Beer.\nIssue: When a role owner (delegator) assigns a user as a delegate for a specific period, and the delegate is already a member of the same approval group as the delegator, we have observed an issue. Upon the cancellation of the delegation by the delegator, the delegate is also removed from the approval group, even if the delegate was a member before the delegation. Since role owners may not always be aware of the existing members of their approval groups, this process of assigning and canceling delegations could inadvertently lead to the removal of approvers from their groups.\nExpectation: Upon cancellation of the delegation request by the delegator, the delegate should only be removed as a delegate approval for the delegator. Delegate should not be removed from the approval group in which both the delegator and delegate were present before the delegation request was created.\nBusiness Impact: Go-Live is impacted for the customer.\nRepro-Steps:\nGo to PLC portal page and click on 'Delegate Approval Request' tab.\nSetup another user as delegate for your User (both the delegator and delegate also needs to part of at least one approval group together).\nSubmit the delegation request.\nCreate another request to cancel the delegation request.\nOnce the delegation is cancelled, if we check the approval group now in which both the delegator and delegate were present, the delegate is now also removed from this approval group permanently.\nAfter cancelling the delegation:\nPathlock Change Logs:\nInstance details:\nDiscussion:\nStephanie Thompson - 14/4/2025, 6:53:22 pm\nUpdated to reflect this issue is a blocker.\nUAT dates for Provisioning:  4/3-5/7\nProvisioning Go Live Technical Target Date:  5/30\nThis is similar to Bug 25094.\nGaurav Singh - 11/4/2025, 7:26:16 pm\nplease review and assign it to PE team.\nBBC: Pathlock Roles: Custom built role isn't working as expected",
//     Category: "Bug / Issue",
//     Subcategory: "Data Consistency / Sync Issues",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 10,
//     Name: "BBC: Pathlock Roles: Custom built role isn't working as expected",
//     Description:
//       "Customer needs a custom role created with name as 'BBC RMR Pathlock Admin'. The custom role configuration is attached for reference.\nCurrent behaviour:\nUser is unable to perform below tasks -\n1. Upload ruleset xls file from the Risks screen\n2. Create / add new mitigation control\nExpected behaviour\n:\nUser should not be able to perform above operations with the 'BBC RMR Pathlock Admin' custom role access. Please confirm if custom role created needs any modifications.\nRepro-Steps:\nRepro steps for - Unable to upload ruleset xls file from the Risks screen\nLogin with user having custom role 'BBC RMR Pathlock Admin' assigned.\nGo to Compliance > Risks > Actions & try to upload rule set.\nRepro steps for - Unable to create / add new mitigation control\nLogin with user having custom role 'BBC RMR Pathlock Admin' assigned.\nGo to Compliance > Controls & click on 'New Control' button to add new mitigation control\nDiscussion:\nKeri Bowman - 11/4/2025, 10:00:50 pm\nplease utilize the severity matrix to select the severity associated to each project stage. Based on BBC ARA prepping for go-live but not at risk of contract loss, this is a Severity 3. I have updated this accordingly. It is important that severities be properly reflected as it impacts how the product experts, engineers and managers organize their resources.\ncc\nBhagyashri Yamulakar - 11/4/2025, 9:54:57 pm\nHi  and ,\nSince the business is not impacted due to the Custom Role and its actions, could you please reduce the severity?\nThanks,\nBhagyashri\nCC\nBhagyashri Yamulakar - 11/4/2025, 8:35:22 pm\nHi\nPlease provide the customer's name.\nThanks,\nBhagyashri\nCC\nSwapnil Karode - 11/4/2025, 12:50:59 pm\n@Eyal Gottlieb Please process / route this further.\ncc: @Vineet Aggarwal @Stephanie Thompson @Gaurav Singh\nBBC: Pathlock Roles: Role 'Enable edit' doesn't function as expected",
//     Category: "Bug / Issue",
//     Subcategory: "Connection and Integration Issues",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 11,
//     Name: "BBC: Pathlock Roles: Role 'Enable edit' doesn't function as expected",
//     Description:
//       "Customer needs a custom role created with name as 'BBC SAP Security Admin'. The custom role configuration is attached for reference.\nCurrent behaviour:\nUser is able to perform below tasks despite not having Enable edit role assigned.\n1. Able to edit existing risks.\n2. Allows to activate/deactivate individual mitigation controls\nExpected behaviour\n:\nUser should not be able to perform above operations despite not having Enable edit role access. Please confirm if custom role 'BBC SAP Security Admin' created needs any modifications.\nRepro-Steps:\nRepro steps for - Able to edit existing risks.\nLogin with user having custom role 'BBC SAP Security Admin' assigned.\nGo to Compliance > Risks & try editing any risk.\nRepro steps for - Allows to activate/deactivate individual mitigation controls\nLogin with user having custom role 'BBC SAP Security Admin' assigned\nGo to Compliance > Controls & try to activate/deactivate any mitigation control.\nDiscussion:\nBhagyashri Yamulakar - 15/4/2025, 11:54:38 am\nThanks\nCC\nWorking on this.\nKeri Bowman - 11/4/2025, 10:03:01 pm\n- I have updated the severity to reflect that this project stage is prepping for go-live but not at risk of contract loss, making this a Sev 3.\ncc\nBhagyashri Yamulakar - 11/4/2025, 9:55:09 pm\nHi  and ,\nSince the business is not impacted due to the Custom Role and its actions, could you please reduce the severity?\nThanks,\nBhagyashri\nCC\nSwapnil Karode - 11/4/2025, 12:33:16 pm\nPlease process / route this further.\ncc:\nSupport for encrypted SAML based SSO integration",
//     Category: "Bug / Issue",
//     Subcategory: "Data Consistency / Sync Issues",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 12,
//     Name: "Support for encrypted SAML based SSO integration",
//     Description:
//       "Customer would like to have SAML based SSO integration with PLC, but need the whole SAML token sent from IDP to PLC (service provider) to be encrypted using PLC's public key which will then be decrypted by PLC using a private key.\nAs per customer this is a part of their compliance requirement and is needed to prevent Man in middle or any spoofing of SAML tokens type of attacks.\nPlease let us know if such a configuration is possible?\nThis will also need Pathlock to provide their publick key along with other metadata items to the customer.\nDiscussion:\nVineet Aggarwal - 11/4/2025, 6:57:04 am\nSession timeout for Pathlock when using SSO",
//     Category: "Feature Request",
//     Subcategory: "UI/UX Improvements",
//     Sentiment: "Positive",
//     Other: "Error",
//   },
//   {
//     ID: 13,
//     Name: "Session timeout for Pathlock when using SSO",
//     Description:
//       "Customer is looking for setting a session timeout for Pathlock when integrated with SSO. Currently, once a user logs in, the session remains active for an indefinite period of time and user is not asked to re-authenticate.\nRequirement from customer is to be able to set a session timeout at application level.\nRepro-Steps:\nIntegrate PLC with SSO (Entra ID)\nLog in as end user\nSession never times out.\nDiscussion:\nVineet Aggarwal - 11/4/2025, 6:45:03 am\ncan you please let us know if Pathlock currently has this configuration?\nKimberly Clark: EAM: Issue with Parsing Change Logs from SAP into PLC",
//     Category: "Feature Request",
//     Subcategory: "UI/UX Improvements",
//     Sentiment: "Positive",
//     Other: "Error",
//   },
//   {
//     ID: 14,
//     Name: "Kimberly Clark: EAM: Issue with Parsing Change Logs from SAP into PLC",
//     Description:
//       "Customer: Kimberly Clark\nSeverity: Critical\nIssue: The EAM sesssion is used to make changes, the change logs in PLC is showing incorrect information which is not matching with the actual header information about that table in SAP.\nThe Connector is pulling the results correctly however it is not parsed properly while writing into EAM Logs.\nBusiness Reason:\nEAM Logs should not show the incorrect information due to Audit implication and its termed as Golive Blocker.\nDetailed Observation:\nIn ADR6 table the Address Number and Person Number fields values are switched.\nThe values 10000109777 is printed as 1000010977 and leading last digit (7) is moved to next field.\nThe Other fields\nChange Logs from SAP:\nEAM Log:\nRepro-Steps:\n1) Start the EAM Session.\n2) Update the user address records using SU01. Ensure the user has address records maintained.\n3) Sync the EAM log. Verify the logs in Connector test and in EAM logs.\nRelated Work:\nChild (1)\nConnector action for reading EAM log retrieves wrong value for Record Key which results in incorrect date | 31780 Bug\nDiscussion:\nOleg Firumiants - 14/4/2025, 7:29:56 pm\nPR  raised  to apply changes into cloud/master-2025.1.0\nEyal Gottlieb - 14/4/2025, 3:07:33 pm\n,\nBug report created\nEyal Gottlieb - 14/4/2025, 2:49:24 pm\nOpening a bug report for this now\nRahul Sharma - 11/4/2025, 9:14:19 pm\nPlease triage this issue to the right owner, I can tell you this is a defect in parsing. Its not happening for all tables in change log. Currently it is reported for SAP Address table but SAP has thousands of table so it could happen with other tables.\nSome needs to be look at the logic of parting the Information from Connector and Writing into the EAM logs and check where the gap is based on the example shared.\nCC\nStephanie Thompson - 11/4/2025, 5:21:15 pm\nKC/PWC is in UAT testing. Go Live is targeted fo\nOperation - IsUserExist is failing during User Creation Process",
//     Category: "Bug / Issue",
//     Subcategory: "Data Consistency / Sync Issues",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 15,
//     Name: "Operation - IsUserExist is failing during User Creation Process",
//     Description:
//       'During Create User Operation via the workflow, we are getting below error.\nThe remote server returned an error: (400) Bad Request. Type: RestWebService Host: w3wp More Information: Error Source: Pathlock.Cloud.LINQtoCSV Error Area: Xpandion.ProfileTailor.Common Current System: Oracle Fusion Message: The remote server returned an error: (400) Bad Request. Http Code: 400 Returned Message: Service call error: Status code: 400 BadRequest https://ecvt-test.fa.us2.oraclecloud.com//hcmRestApi/scim/Users/?startIndex=500&count=500 { "Errors" : [ { "description" : "The value for startIndex isn\'t valid. (ASE-4335082)", "code" : "400" } ] } Username = Pathlocktest31 windowsUsername = roleCustomAttribute10 = workflowId = 33847 copyReferenceUser = StartDate_DateFormat = yyyy/MM/dd HH:mm:ss EndDate_DateFormat = yyyy/MM/dd HH:mm:ss startIndex = 1 itemsPerPage = 500 audit_batch_changedbyusers = 50 audit_batch_changedocuments = 2 fromDate_DateFormat = dd/MM/yyyy HH:mm:ss toDate_DateFormat = dd/MM/yyyy HH:mm:ss hrtreetype = hrtreecode = language = settings_PersistDB = False settings_SystemType = 120 settings_IsInLearningPhase = True settings_LearningPhaseRange = 0 settings_SaveHistory = False settings_SapHostName = https://ecvt-test.fa.us2.oraclecloud.com/ settings_SapSystemNumber = 0 settings_SapClientNumber = settings_IsClientDependant = False settings_SamplingRate = 0 settings_UpdateAD = False settings_TimeSliceInDays = 100 settings_SapUserName = Pathlock.Integration settings_Language = EN settings_Domain = settings_ExtendedRfcLogRead = h:1 settings_IsExtendedRfcLogRead = False settings_LanguageToDisplay = settings_ChangeDocuments = settings_SystemId = 1 settings_CuaSystemId = settings_SecondaryUserName = settings_ApplicationURL = settings_Attribute1 = settings_Attribute2 = settings_Attribute3 = settings_Attribute4 = settings_Attribute5 = settings_Attribute6 = settings_Attribute7 = settings_Attribute8 = settings_Attribute9 = settings_Attribute10 = settings_Attribute11 = settings_Attribute12 = settings_Attribute13 = settings_Attribute14 = settings_Attribute15 = settings_EndTimeRange = 12/31/2024 13:52:19 settings_ReadAuditDataEvery = -1 settings_DisableCua = False settings_TimeZoneId = UTC _database = SystemId = 1 ParametersForJson = {}\nOn Debugging further with Lovekesh, if we identified this as pagination issue and was able to replicate the issue with IsUserExist Operation via Connector Configuration Test with web service log as -\n{ "Errors" : [ { "description" : "The value for startIndex isn\'t valid. (ASE-4335082)", "code" : "400" } ] }\nRepro-Steps:\nConnection Config Test-> IsUserExist-> PathlockTest33 (any existing user in PLC)\nRelated Work:\nRelated (1)\n[CON] Operation - IsUserExist is failing during User Creation Process | 31815 Bug\nDiscussion:\nBipin Mishra - 10/4/2025, 10:58:33 pm\nCC-\nBayer: Access/Technical Roles: Activity count in PLC is not matching for Parent and its Derived roles',
//     Category: "Bug / Issue",
//     Subcategory: "Data Consistency / Sync Issues",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 16,
//     Name: "Bayer: Access/Technical Roles: Activity count in PLC is not matching for Parent and its Derived roles",
//     Description:
//       "Team,\nActivity count in PLC is not matching for Parent and its Derived roles.\nParent role ADTSR_MM_RECPRL02 in PLC has 52 activities in DM4, whereas its derived role ADTSR_MD_RECPRL02_XDXC_C5CALL in PLC has 36 activities.\n(We see the similar behavior for PM4 system as well).\nPlease see the attached role content reports for both roles.\nIdeally it should be same as the role menus for parent and derived role has same values in the backend\nsystem.\nNot sure if the data synching behavior is different for the parent and derived roles.\nParent role ADTSR_MM_RECPRL02 in PLC has 52 activities\nDerived role ADTSR_MD_RECPRL02_XDXC_C5CALL in PLC has 36 activities\nBackend system: DM4\nParent role:\nDerived role:\nWe see below are the extra activities in Parent role in PLC as compared to Derived role.\nBut these activities do exist in the derived role in the backend system, but not showing in the PLC.\nDerived role menu:\nNote: We saw similar issue with other Parent and its derived roles.\nFor example: Parent: ADTSR_DM_RECPDL01 and derived: ADTSR_DD_RECPDL01_XDXC_C5CALL\nLet me know if you need additional information.\ncc:\nRepro-Steps:\n1. Login to PLC system.\n2. Navigate to Access-->Technical Roles\n3. Search for Parent role and check the Activity count\n4. Search for Derived role and check the Activity count.\nUsage Logs in EAM session are not displayed for Salesforce",
//     Category: "Bug / Issue",
//     Subcategory: "Data Consistency / Sync Issues",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 17,
//     Name: "Usage Logs in EAM session are not displayed for Salesforce",
//     Description:
//       'The environment:\nUsage Logs are not displayed in the EAM session, Request number is  on Orion Live instance\nGetting a 404 error in the web services logs\nRepro-Steps:\nLog in to:\nCreate a new request for Elevated Access Request - Select Roles OB for system SF - Demo (Salesforce)\nSelect User:   crazyray@pathlockselab.onmicrosoft.com - Crazy Ray\nSelect  Role :  System_Administration_PS - System Administration PS\nApprove the new request so roles are assing to the EAM user Crazy Ray\nLog into Salesfoce and do so changes\nNo changes are log in the request\nDiscussion:\nBhagyashri Yamulakar - 15/4/2025, 12:24:42 pm\nAccepted Call.\nThanks,\nBhagyashri\nMiguel Azpeitia - 11/4/2025, 11:50:11 pm"Error"d  Just added more details. Like system and also repro steps. Also schedule a meeting for Tuesday the 15th 8 am. I see you are both available please let me know if this is ok.\nBhagyashri Yamulakar - 11/4/2025, 8:54:24 pm\nHi ,\nPlease provide the environment where you are testing and let me know a convenient time for a call. Additionally, we need more details about the issue or the steps to reproduce it.\nThanks,\nBhagyashri\nCC\nApprove/Decline button remained visible, with no indication or log details confirming the approval',
//     Category: "Bug / Issue",
//     Subcategory: "Data Consistency / Sync Issues",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 18,
//     Name: "Approve/Decline button remained visible, with no indication or log details confirming the approval",
//     Description:
//       'The "Approve/Decline request..." button remained visible, with no indication or log details confirming the approval.\nHowever, after closing the sub-window, the processed request was removed from the list of pending approval.\nDespite the request being processed, the user would like real-time updates for each approval step to avoid confusion.\nCall recording link:\nhttps://fathom.video/share/MEUhzcu_6y57xJ_8bSVfWYrr9eCu3Wwt\nRepro-Steps:\nThe issue cannot be replicated because it occurs specifically when approvers execute the request approval\nDiscussion:\nBhagyashri Yamulakar - 15/4/2025, 12:43:24 pm\nHi\nPlease let me know a convenient time for us to connect.\nThanks,\nBhagyashri\nCC\nIdonne Caballero - 11/4/2025, 9:31:56 pm\nHi\nDone filling up the Priority.\nMany thanks,\nIdonne\nBhagyashri Yamulakar - 11/4/2025, 8:48:32 pm\nHi  and\nPlease provide priority.\nThanks,\nBhagyashri\nCC\nEmployee to User mapping is not working at Burckhardt Compression',
//     Category: "Bug / Issue",
//     Subcategory: "Positive",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 19,
//     Name: "Employee to User mapping is not working at Burckhardt Compression",
//     Description:
//       'At Burckhardt Compression, we can see that the user groups were defined.\nWhere the users to user group assignment is based on User Group Rules.\nHere, the issue is the rules are not working for some users (Even though the rules are satisfied with the employee data).\nRepro-Steps:\nUsers were not getting assigned to the user groups based on the user group rules\n(Even though the rules are satisfied with the employee data).\nUser group rule format\n"Employee: Department Level 3 = True AND Department Level 4 = 1 AND Department Level 6 = SAMR AND Employee Id Not Contains onmicrosoft.com"\nUser and Employee data has been placed under attachments section\nAs a part of troubleshooting, we saw that the email address is different between the employee & user data. (Sample users -Matthieu GNAAGI  & Olivier Maire )\nBut here, even though the email is different, the Employee to user mapping is done successfully for the user Laurent VARIOT\nAs a part of troubleshooting after enabling the trace we noticed the below which is working for Laurent VARIOT\nGetEmployeeId for : variot_l Initial ID: Employee ID by EmployeeIdByMappingRules (override): Employee ID by HR System-Wide System: Employee ID by CompanyEmployees (2): Employee ID by Email: Employee ID by provider GetEmployeeIdByUsername:\nWhere this is not working for the user "Olivier Maire"\nGetEmployeeId for : maire_o Initial ID: Employee ID by EmployeeIdByMappingRules (override): Employee ID by HR System-Wide System: Employee ID by CompanyEmployees (2): Employee ID by Email: Employee ID by provider GetEmployeeIdByUsername: Employee ID by provider GetEmployeeIdByMappingRules: Employee ID by provider GetEmployeeIdByWindowsUsername:\nRequest your help us to know where the difference is and how we can overcome this.\nUser Access Review from Excel created without content',
//     Category: "Bug / Issue",
//     Subcategory: "Data Consistency / Sync Issues",
//     Sentiment: "Negative",
//     Other: "Error",
//   },
//   {
//     ID: 20,
//     Name: "User Access Review from Excel created without content",
//     Description:
//       "After go-live we repeated the steps done for non-production but the campaign was created syucessfully without content. No errors during campaign creation and the preview was correct. I attached the log file and the instructions. I also added the file uploaded. All was good in non-production so I assume some configuration is missing. Please let me know what else to check compared to what I did listed in the user instruction I created.",
//     Category: "Error",
//     Subcategory: "Error",
//     Sentiment: "Error",
//     Other: "Error",
//   },
// ];
