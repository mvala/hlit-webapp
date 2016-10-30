export class LdapUser {
    ipaUniqueID: string;
    dn: string;
    username: string;
    krbPrincipalName: string;
    uidNumber: string;
    gidNumber: string;
    displayName: string;
    email: string;
    homeDirectory: string;
    loginShell: string;
    groups: any;
    isAdmin: boolean;
    tokenValidDate: Date;

    setUser(profile: any) {
        this.ipaUniqueID = profile.ipaUniqueID;
        this.dn = profile.dn;
        this.username = profile.uid;
        this.krbPrincipalName = profile.krbPrincipalName;
        this.uidNumber = profile.uidNumber;
        this.gidNumber = profile.gidNumber;
        this.displayName = profile.displayName;
        this.email = profile.mail;
        this.homeDirectory = profile.homeDirectory;
        this.loginShell = profile.loginShell;
        this.groups = profile.groups;
        this.isAdmin = profile.isAdmin;

    }

    setTokenExpiration(dateStr: string) {
        this.tokenValidDate = new Date(dateStr);
    }

    clear() {
        this.ipaUniqueID = '';
        this.dn = '';
        this.username = '';
        this.krbPrincipalName = '';
        this.uidNumber = '';
        this.gidNumber = '';
        this.displayName = '';
        this.email = '';
        this.homeDirectory = '';
        this.loginShell = '';
        this.groups = null;
        this.isAdmin = false;
        this.tokenValidDate = null;
    }
}
