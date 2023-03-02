declare module namespace {

    export interface AwsProfile {
        name: string;
        description: string;
        aws_ccount_id: string;
        aws_access_key_id: string;
        aws_secret_access_key: string;
    }

    export interface InputParam {
        key: string;
        vaule: string;
    }

    export interface Secret {
        key: string;
        vaule: string;
    }

    export interface Service {
        name: string;
        description: string;
        git_root: string;
        git_repo_path: string;
        git_branch: string;
        InputParams: InputParam[];
        secrets: Secret[];
    }

    export interface Function {
        name: string;
        description: string;
        git_root: string;
        git_repo_path: string;
        git_branch: string;
        start_up_function: string;
        InputParams: InputParam[];
        secrets: Secret[];
    }

    export interface PipelineType {
        name: string;
        description: string;
        services: Service[];
        functions: Function[];
    }

    export interface Project {
        name: string;
        description: string;
        pipeline_types: PipelineType[];
    }

    export interface Environment {
        name: string;
        description: string;
        aws_profile: string;
        deploy_to_regions: string[];
        projects: Project[];
    }

    export interface GitProfile {
        name: string;
        description: string;
        root_url: string;
        token: string;
    }

    export interface Platform {
        name: string;
        description: string;
        aws_profiles: AwsProfile[];
        environments: Environment[];
        git_profiles: GitProfile[];
    }

    export interface Organization {
        name: string;
        description: string;
        platforms: Platform[];
    }

    export interface SelfServiceOboarding {
        organizations: Organization[];
    }

    export interface RootObject {
        self_service_oboarding: SelfServiceOboarding;
    }

}
