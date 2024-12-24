export interface TranslationKeys {
  common: {
    createSecret: string;
    starOnGithub: string;
    learnMore: string;
    loading: string;
    create: string;
    delete: string;
    copy: string;
    share: string;
    download: string;
    success: string;
    error: string;
    time: {
      minute_one: string;
      minute_other: string;
      hour_one: string;
      hour_other: string;
      day_one: string;
      day_other: string;
    };
  };
  landing: {
    title: string;
    subtitle: string;
    steps: {
      encrypt: {
        title: string;
        description: string;
      };
      share: {
        title: string;
        description: string;
      };
      autoDelete: {
        title: string;
        description: string;
      };
    };
  };
  create: {
    form: {
      content: {
        label: string;
        placeholder: string;
        fileHint: string;
        fileSelected: string;
      };
      password: {
        label: string;
        placeholder: string;
      };
      ttl: {
        label: string;
        placeholder: string;
      };
      burn: {
        label: string;
        description: string;
      };
      advanced: {
        toggle: string;
        ip: {
          label: string;
          placeholder: string;
          description: string;
        };
        readCount: {
          label: string;
          description: string;
        };
      };
    };
    success: {
      title: string;
      description: {
        main: string;
        password: string;
      };
      urlCopied: string;
      qrCode: {
        title: string;
        description: string;
      };
      createAnother: string;
      deleteSecret: string;
      info: {
        expires: string;
        burnAfterReading: string;
        passwordProtected: string;
        ipRestrictions: string;
        readCount: string;
      };
    };
    errors: {
      contentRequired: string;
      readCountWithBurn: string;
      tooManyIps: string;
      invalidIp: string;
      uploadFailed: string;
      deleteFailed: string;
      secretNotFound: string;
      unexpectedStatus: string;
    };
  };
}

export type TranslationNamespace = keyof TranslationKeys;

export type NestedKeys<T> = T extends string
  ? []
  : {
      [K in keyof T]: [K, ...NestedKeys<T[K]>];
    }[keyof T];

export type TranslationKey = NestedKeys<TranslationKeys>;
